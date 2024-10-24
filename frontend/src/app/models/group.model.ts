export interface Group {
  id: string;
  name: string;
  channels: { id: string, name: string }[];
  messages: { sender: string, content: string }[];
}
