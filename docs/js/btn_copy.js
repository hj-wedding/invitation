// Function to copy text to the clipboard using the Clipboard API or fallback method
function copyTextToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Text successfully copied to clipboard');
        })
        .catch(err => {
          console.error('Error copying text to clipboard:', err);
        });
    } else if (window.clipboardData && window.clipboardData.setData) {
      // Use IE-specific clipboardData object
      window.clipboardData.setData('Text', text);
      console.log('Text successfully copied to clipboard in IE');
    } else {
      // Fallback for other browsers
      copyTextToClipboardFallback(text);
    }
  }
  
  import copy from 'copy-to-clipboard';
  // Function to copy text to the clipboard using the copy-to-clipboard library
  function copyTextToClipboardWithLibrary(text) {
    try {
    //   const copy = require('copy-to-clipboard');
      copy(text);
      console.log('Text successfully copied to clipboard using the library');
    } catch (error) {
      console.error('Error copying text to clipboard:', error);
    }
  }
  
  // Usage: Call either of the functions with the text you want to copy
  const textToCopy = "This is the text to copy to the clipboard.";
//   copyTextToClipboard(textToCopy); // Use the Clipboard API or fallback
  copyTextToClipboardWithLibrary(textToCopy); // Use the library (commented out for reference)
  