import { Dialog } from "./ui/Dialog";
import { COMPONENT_BY_ID } from "../data/components";
import { useToast } from "./Toast";

interface Props { isOpen: boolean; onClose: () => void; componentId?: string; componentTitle?: string; }
export function triggerCliModal(componentId?: string, componentTitle?: string) {
  window.dispatchEvent(new CustomEvent("twentyfirst:open-cli", { detail: { componentId, componentTitle } }));
}
export function CliTerminalModal({ isOpen, onClose, componentId = "btn-shiny-01", componentTitle }: Props) {
  const item = COMPONENT_BY_ID[componentId];
  const { toast } = useToast();
  const copySource = async () => {
    if (!item) return;
    try { await navigator.clipboard.writeText(item.code); toast("success", "Source copied"); }
    catch { toast("error", "Could not copy. Select the source in the detail page instead."); }
  };
  return <Dialog open={isOpen} onClose={onClose} title={`Use ${item?.title || componentTitle || "component"}`}>
    <p className="text-sm text-[var(--uf-text-secondary)]">This local component has no verified registry installation URL. Copy its source, then review its imports and styles in your project.</p>
    {item ? <div className="mt-5 flex flex-wrap gap-3"><button onClick={copySource} className="rounded-lg border border-[var(--uf-border)] p-3 text-sm">Copy source</button><a onClick={onClose} href={`#/component/${encodeURIComponent(item.id)}`} className="rounded-lg border border-[var(--uf-border)] p-3 text-sm">View source and preview</a></div> : <p className="mt-4" role="status">Component not found in the local catalog.</p>}
    <a className="mt-5 inline-block text-sm underline" href="https://21st.dev/mcp" target="_blank" rel="noreferrer">Official 21st installation documentation</a>
  </Dialog>;
}
