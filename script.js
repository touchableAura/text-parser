function parseText() {
    var inputText = document.getElementById('inputText').value.trim();
    var lines = inputText.split('\n');
    var outputText = '';
  
    for (var i = 0; i < lines.length - 1; i++) {
      var key = lines[i];
      var value = lines[i + 1].trim();
      var formattedLine = key + ': ' + value;
      outputText += formattedLine + '\n';
      i++; // Skip the next line as it has already been processed
    }
  
    document.getElementById('outputText').value = outputText.trim();
  }
  