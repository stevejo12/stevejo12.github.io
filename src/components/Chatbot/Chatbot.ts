export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

/**
 * Stubbed model call. The design prototype used `window.claude.complete`,
 * which only exists inside the Claude Design/Artifact sandbox — it has no
 * effect on a deployed site. Wire this up to a real backend (e.g. a
 * serverless function that calls the Anthropic API server-side) before
 * shipping the chat feature; never call a model API with a secret key
 * directly from the browser.
 */
export async function requestChatReply(_messages: ChatMessage[]): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return "(Chat backend isn't wired up yet — this is a UI-only stub. Connect requestChatReply() in Chatbot.ts to a real API.)";
}
