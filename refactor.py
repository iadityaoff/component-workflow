import os
import re

base_path = "src/components"
preview_path = os.path.join(base_path, "previews")
os.makedirs(preview_path, exist_ok=True)

with open(f"{base_path}/ComponentPreview.tsx", "r") as f:
    text = f.read()

# I will just write a very clean, simple replacement for ComponentPreview.tsx entirely.
# Wait, the user has 50 individual components. I don't want to lose the code of those components!
# I will use a simple regex to extract all functions except ComponentPreview and Frame,
# and write them to a new file `src/components/previews/AllPreviews.tsx`.
# Then I will dynamically import them.

match = re.search(r'(/\* ---------- Frame ---------- \*/.*)', text, re.DOTALL)
if match:
    shared_and_previews = match.group(1)
    
    # We must preserve React imports and Icons
    header = """import React from 'react';
import { CheckIcon, CopyIcon, SearchIcon, StarIcon } from '../Icon';

"""
    with open(f"{preview_path}/AllPreviews.tsx", "w") as f_out:
        f_out.write(header + shared_and_previews)
        # We need to export all components so React.lazy can find them... wait, React.lazy requires a default export or we do a wrapper.
        # Actually, adding "export " before each "function" will do.
    
    with open(f"{preview_path}/AllPreviews.tsx", "r") as f_in:
        t2 = f_in.read()
    t2 = re.sub(r'\nfunction ([A-Z])', r'\nexport function \1', t2)
    with open(f"{preview_path}/AllPreviews.tsx", "w") as f_out:
        f_out.write(t2)

    # Now rewrite ComponentPreview.tsx
    new_preview = """import React, { Suspense } from 'react';
import type { PreviewKind } from '../data/components';

// Dynamically target the chunk
const PreviewMap = React.lazy(() => import('./previews/PreviewMap'));

export function ComponentPreview({ kind }: { kind: PreviewKind }) {
  return (
    <Suspense fallback={
      <div className="preview-grid-bg flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-ink-50 dark:bg-ink-900/60 skeleton" />
    }>
      <PreviewMap kind={kind} />
    </Suspense>
  );
}
"""
    with open(f"{base_path}/ComponentPreview.tsx", "w") as f_out:
        f_out.write(new_preview)

    # Create PreviewMap.tsx which imports from AllPreviews.tsx
    # We can fetch the switch block from the original code
    switch_match = re.search(r'export function ComponentPreview.*?{(.*?)}', text, re.DOTALL)
    if switch_match:
        old_body = switch_match.group(1)
        # Replace ComponentPreview with PreviewMap and add exports
        preview_map_code = f"""import React from 'react';
import type {{ PreviewKind }} from '../../data/components';
import {{ 
  Frame, PrimaryButton, GradientButton, GhostButton, OutlineButton, DestructiveButton,
  IconButtons, LoadingButton, ButtonSizes, PricingCard, StatCard, ProductCard, UserProfileCard,
  NotificationCard, SearchField, FloatingInput, PasswordInput, OTPInput, BadgeRow, AvatarStack,
  SuccessAlert, ErrorAlert, WarningAlert, InfoAlert, PillTabs, ToggleSwitch, Spinner, ProgressBar,
  HeroGradient, HeroMinimal, Testimonial, FeatureGrid, DropdownMenu, CodeBlock, TooltipDemo,
  AccordionDemo, CheckboxList, SelectCustom, DialogConfirm, NavBarPreview, SliderRange, ToastPreview,
  RadioGroup, SidebarNav, SignInPreview, SignUpPreview, FileUploadPreview, PaginationPreview,
  TablePreview, FooterPreview, CalendarPreview
}} from './AllPreviews';

export default function PreviewMap({{ kind }}: {{ kind: PreviewKind }}) {{
{old_body}
}}
"""
        with open(f"{preview_path}/PreviewMap.tsx", "w") as f_out:
            f_out.write(preview_map_code)

print("Done refactoring ComponentPreview.")
