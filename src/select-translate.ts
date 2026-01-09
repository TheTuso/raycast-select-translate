import { getSelectedText, open, showToast, Toast } from "@raycast/api";

export default async function Command() {
  try {
    const selectedText = await getSelectedText();
    const encodedText = encodeURIComponent(selectedText);
    await open(`raycast://extensions/raycast/translator/translate?fallbackText=${encodedText}`);
  } catch {
    await showToast({
      style: Toast.Style.Failure,
      title: "No text selected",
      message: "Please select some text first",
    });
  }
}
