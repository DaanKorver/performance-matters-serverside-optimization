const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const cssnano = require('cssnano')
const fs = require('fs')
const path = require('path')

const inputCss = path.join(__dirname, '../public/css/style.css')
const outputCss = path.join(__dirname, '../public/css/style.min.css')

const jsFiles = [
  'modules/api.js',
  'modules/render.js',
  'modules/search.js',
  'script.js',
  'three.js'
]

fs.readFile(inputCss, (err, buffer)=>{
  postcss([autoprefixer, cssnano])
  .process(buffer, {from: inputCss, to: outputCss})
  .then(result =>{
    fs.writeFile(outputCss, result.css, ()=> true)
  })
})

jsFiles.forEach(file=>{
  const inputPath = path.join(__dirname, `../public/scripts/${file}`)
  let outputName = file.split('.')
  outputName[1] = 'min'
  outputName[2] = 'js'
  outputName = outputName.join('.')
  const outputPath = path.join(__dirname, `../public/scripts/${outputName}`)
  //Minif JS here
})