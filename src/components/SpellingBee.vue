<template>
<div>
    <input class="spelling" autocomplete="off" type="text" caption="Enter a word..." ref="input" v-model="input" @keydown="validateInput($event, input)" />
</div>
<div class="container">
    <div class="block" v-for="i in letters">{{ i }}</div>
</div>
<div><h1>{{ message }}</h1></div>
<div class="wordlist">
    <li v-for="word in found">{{ word }}</li>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            message: "",
            letters: "",
            regex: "",
            input: "",
            found: []
        }
    },
    methods: {
        convertLettersToRegex(letters) {
            return letters.split('').join('.')
        },
        validateInput(event, input) {
            let re = new RegExp("^(["+this.regex+"."+this.regex.toLowerCase()+"])$")
            if (event.key === "Enter") {
                this.submitWord(input)
            }
            if (!re.test(event.key) && event.key !== "Backspace") {
                this.ignoredValue = event.key ? event.key : "";
                event.preventDefault();
            }
        },
        submitWord(word) {
            this.input = "" //clear input

            axios.get('https://api.urbandictionary.com/v0/define?term='+word)
            .then((response) => {
                if (response.data.list.length > 0) {
                    let middle = this.letters.charAt(this.letters.length-1)
                    if (!word.includes(middle.toLowerCase())) {
                        this.message = "Middle letter not included"
                    }else{
                        this.message = "Nice!"
                        this.found.push(word)
                    }
                }else{
                    this.message = "Not a valid word"
                }
            })
        },
        generatePangram() {
            axios.get('https://random-word-api.herokuapp.com/word?length=9')
            .then((response) => {
                const word = response.data[0]

                //generate a word with 7 unique letters
                const uniqueCount = new Set(word).size
                if (uniqueCount !== 7) {
                    this.generatePangram()
                    return
                }
                this.letters = [...new Set(word)].join('').toUpperCase()
                this.regex = this.convertLettersToRegex(this.letters)
            })
        }
    },
    mounted() {
        this.generatePangram()
        this.$refs?.[`input`].focus()
    }
}
</script>

<style>
div {
  text-align: center;
}

.container {
  display: grid;
  margin: 150px auto;
  width: 150px;
}

.block {
  grid-area:1/1;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%,75% 100%,25% 100%,0 50%);
  background-color: #efefef;
  padding: 20px;
  color: black;
  font-size: 3.5em;
}

.container > :nth-child(1) {
  transform: translateY(100%);
}
.container > :nth-child(2) {
  transform: translateY(-100%);
}
.container > :nth-child(3) {
  transform: translate(-75%,-50%)
}
.container > :nth-child(4) {
  transform: translate(75%,-50%)
}
.container > :nth-child(5) {
  transform: translate(75%,50%)
}
.container > :nth-child(6) {
  transform: translate(-75%,50%)
}
.container > :nth-child(7) {
  background-color: yellow
}

.spelling {
    width: 350px;
    height: 50px;
    margin: 5px;
    text-align: center;
    font-size: larger;
    text-transform: uppercase;
}

.wordlist {
    margin: 10px 0
}

li {
    list-style: none 
}
</style>