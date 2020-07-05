window.$ = window.jQuery;

var char = new chariot({
    example4: [
        {
            selectors: 'h1',
            tooltip : {
                position: 'bottom',
                title: 'Chariot Example Tutorial',
                text: 'This example tutorial will walk you through an html page'
            }
        },

      {
        selectors: 'span#microsoft',
        tooltip: {
          position: 'right',
          title: 'First Div',
          text: 'This div will do absolutely nothing if you click on it, but how would you know if I didnt tell you'
        }
      },
      {
        selectors: 'span#amazon',
        tooltip: {
          position: 'right',
          title: 'Second Div',
          text: "This div is a bit more complex, it knows a lot about you. Be careful around it"
        }
      }
    ]
  });

  char.startTutorial('example4')
