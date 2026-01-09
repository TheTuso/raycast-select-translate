import { getPreferenceValues, getSelectedText, open, showToast, Toast } from "@raycast/api";

interface Preferences {
  translationService: "raycast" | "google";
}

export default async function Command() {
  try {
    const selectedText = await getSelectedText();
    const encodedText = encodeURIComponent(selectedText);
    const preferences = getPreferenceValues<Preferences>();

    let url: string;

    if (preferences.translationService === "google") {
      // Google Translate extension by gebeto from Raycast Store
      url = `raycast://extensions/gebeto/translate/translate?fallbackText=${encodedText}`;
    } else {
      url = `raycast://extensions/raycast/translator/translate?fallbackText=${encodedText}`;
    }

    await open(url);
  } catch {
    await showToast({
      style: Toast.Style.Failure,
      title: "No text selected",
      message: "Please select some text first",
    });
  }
}
