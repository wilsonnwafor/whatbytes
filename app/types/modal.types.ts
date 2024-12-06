export interface UpdateModalProps{
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { rank: number; percentile: number; score: number }) => void;
}