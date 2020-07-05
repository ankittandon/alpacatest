window.$ = window.jQuery;

var char = new chariot({
    example4: [
        {
            selectors: 'h1',
            tooltip : {
                position: 'bottom',
                title: 'Chariot Example Tutorial',
                text: 'This example tutorial will walk you through an html page. It is built using chariot.js'
            }
        },

      {
        selectors: 'span#amazon',
        tooltip: {
          position: 'right',
          title: 'Microsoft',
          text: 'This tutorial box can tell you something important about Microsoft like: "Microsoft has a market cap of 1.56 Tillion Dollars"'
        }
      },
      {
        selectors: 'span#microsoft',
        tooltip: {
          position: 'bottom',
          title: 'Amazon',
          text: "Amazon's market cap is 1.44 Trillion Dollars - $1,400,000,000,000 (that's 11 zeroes!)"
        }
      }
    ]
  });

  char.startTutorial('example4')
