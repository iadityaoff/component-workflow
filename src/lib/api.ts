import { supabase } from './supabase';
import type { ComponentItem } from '../data/components';

/**
 * Structured API/Data Access Layer
 * Provides scalable interactions with Supabase securely.
 */

// Custom API Error class for predictable error handling maps
export class APIError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'APIError';
  }
}

const handleResponse = <T>(data: T | null, error: any): T => {
  if (error) {
    // Integrate with analytics / monitoring here
    console.error('[API Error]:', error.message);
    throw new APIError(error.message, error.code);
  }
  return data as T;
};

export const api = {
  components: {
    /**
     * Fetch a paginated list of components.
     */
    async getFeatured(limit = 20, offset = 0): Promise<ComponentItem[]> {
      const { data, error } = await supabase
        .from('components')
        .select(`*, profiles(handle, display_name, avatar_url)`)
        .eq('featured', true)
        .order('likes_count', { ascending: false })
        .range(offset, offset + limit - 1);

      return handleResponse(data, error);
    },

    /**
     * Fetch a single component for the detail and Sandpack view.
     */
    async getById(id: string): Promise<ComponentItem> {
      const { data, error } = await supabase
        .from('components')
        .select(`*, profiles(handle, display_name, avatar_url)`)
        .eq('id', id)
        .single();
      
      return handleResponse(data, error);
    },

    /**
     * Allows the Remix engine to upload an AI generated or modified component securely.
     */
    async create(payload: Partial<ComponentItem>): Promise<ComponentItem> {
      const { data: user } = await supabase.auth.getUser();
      if (!user?.user) throw new APIError('Unauthenticated. Please log in to publish components.', 401);

      const { data, error } = await supabase
        .from('components')
        .insert([{
          ...payload,
          user_id: user.user.id,
        }])
        .select()
        .single();

      return handleResponse(data, error);
    }
  },

  interactions: {
    async likeComponent(componentId: string) {
      const { data: user } = await supabase.auth.getUser();
      if (!user?.user) throw new APIError('Unauthenticated. Log in to like components.', 401);

      // Inserting into the relational table securely bumps the counter via DB Trigger
      const { data, error } = await supabase
        .from('likes')
        .insert([{ component_id: componentId, user_id: user.user.id }]);
      
      return handleResponse(data, error);
    }
  }
};
