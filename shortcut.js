function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error creating SpanishDict context menu item: ${browser.runtime.lastError}`);
  } else {
    console.log("Created!");
  }
}

browser.contextMenus.create({
  id: "spanishdict-shortcut",
  title: browser.i18n.getMessage("contextMenuItemText"),
  contexts: ["selection"],
  icons: { "32": "icons/logo.png" }
}, onCreated);

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "spanishdict-shortcut":
      browser.tabs.create({"openerTabId": tab.id, "url": `https://www.spanishdict.com/translate/${encodeURIComponent(info.selectionText)}`})
      break;
  }
})
