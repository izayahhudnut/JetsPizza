async function fetchData() {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer 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`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: 'user',
            content: "what is the cheapest product on the menu  ",
          }
        ],
      })
    });
  
    const groqResponse = await response.json();

    const message = groqResponse.choices[0].message.content;
    console.log(message);
  }
  
  fetchData();