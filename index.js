import OpenAI from "openai" 


const openAIApiKey = import.meta.env.VITE_OPENAI_API_KEY

const jokeEl = document.getElementById("joke-display")


const openai = new OpenAI({ apiKey: openAIApiKey, dangerouslyAllowBrowser: true});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Give me a one line christmas joke"}],
    model: "gpt-3.5-turbo",
  });
  jokeEl.innerHTML = `<img src="https://i.gifer.com/7plU.gif">`
  jokeEl.innerHTML = completion.choices[0].message.content
}

document.getElementById('window-container').addEventListener('click', function () {
    main()
    document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
    document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
    document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
})