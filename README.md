# 🖱️ Scrollbook SSR optimization
De scrollbook overview page uit sprint 9.

## 🧹 Serverside Performance Optimalisatie
Voor dit project ga ik SSR optimizen voor het Scrollbook project uit sprint 9.

## 📨 Pre optimization
![pre optimization](https://user-images.githubusercontent.com/30351629/165926076-e6ef1b74-9be3-427b-91f2-244ac00adf87.png) 

### 🔎 Minifying
Ik heb de CSS geminified doormiddel van PostCSS. Daarnaast heb ik zelf ook nog UglifyJS gebruikt om alle JS bestanden te minifyen zodat dit ook minder word.
### 📂 Code splitting
ThreeJS en GSAP werden op iedere pagina ingeladen terwijl deze alleen op de home pagina werd gebruikt. Ik heb het opgelost door deze bestanden alleen op de index in te laden.
### 📥 Caching
Ik heb de Cache-control header gebruikt zodat er om de 10 minuten een request kan worden gemaakt naar de server. Dit zorgt ervoor dat er niet constant requests naar de server gestuurd blijven worden. Dit bespaart kosten voor de server maar zorgt er ook voor dat er weer 1 request minder gemaakt moet worden.

### 📦 Compressie
Voor de compressie heb ik de express compression package gebruikt.

### 📸 Images
Voor de images heb ik squoosh.app gebruikt om de SVG's om te zetten naar een PNG. Daarnaast heb ik de images ook geresized naar een redelijker formaat waardoor de filesize ook is gedaald.

## 📩 Post optimization
![post optimization](https://user-images.githubusercontent.com/30351629/165989998-b3c0e208-4a9e-4591-9fe3-e2d94c6de004.png)


## Bronnen
[PostCSS](https://postcss.org/)  
[UglifyJS](https://www.npmjs.com/package/uglify-js)  
[Cache headers in epxress](https://regbrain.com/article/cache-headers-express-js)  
[Express compression middleware](http://expressjs.com/en/resources/middleware/compression.html)  
[Squoosh.app](https://squoosh.app/)  

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
