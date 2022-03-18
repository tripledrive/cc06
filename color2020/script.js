let key = [0,'false','false','false','false','false','false','false','false','false','false','false','false']
let legend = 'false'

const a1 = ["からくり","カラクリ"]
const a2 = ["はかい","ハカイ","破壊"]
const a3 = ["しゅご","守護"]
const a4 = ["おすし","お寿司"]
const a5 = ["返霊","へんれい"]
const a6 = ["正義","せいぎ"]
const a7 = ["たいよう","太陽"]
const a8 = ["13","１３"]
const a9 = ["まだん","マダン","魔弾"]
const a10 = ["かじの","カジノ"]
const a11 = ["さめ","鮫","サメ"]
const a12 = ["ぜろ","zero","ゼロ","零","ZERO"]
const a13 = ["レジェンド","れじぇんど"]
const a14 = ["挑戦","ちょうせん"]

function checkanswer(){
    const textbox = document.getElementById("text").value
    let elem
    console.log(textbox)
    if(a1.includes(textbox)){
        if(key[1] != 'true'){
            key[0]++;
            key[1] = 'true';
        }
        document.getElementById("answer").innerHTML = "解答数：" + key[0] + "/12"
        document.getElementById("message").innerHTML = "【問1 正解】<br>「エンドレス・パぺット」の物語を紐解いた。"
        elem = document.getElementById("karakuri")
        elem.classList.add("show")
        elem.classList.remove("hide")
    }else if(a2.includes(textbox)){
        if(key[2] != 'true'){
            key[0]++;
            key[2] = 'true';
        }
        document.getElementById("answer").innerHTML = "解答数：" + key[0] + "/12"
        document.getElementById("message").innerHTML = "【問2 正解】<br>「ジェノサイド」の物語を紐解いた。"
        elem = document.getElementById("hakai")
        elem.classList.add("show")
        elem.classList.remove("hide")
    }else if(a3.includes(textbox)){
        if(key[3] != 'true'){
            key[0]++;
            key[3] = 'true';
        }
        document.getElementById("answer").innerHTML = "解答数：" + key[0] + "/12"
        document.getElementById("message").innerHTML = "【問3 正解】<br>「アルカフェウス」の物語を紐解いた。"
        elem = document.getElementById("syugo")
        elem.classList.add("show")
        elem.classList.remove("hide")
    }else if(a4.includes(textbox)){
        if(key[4] != 'true'){
            key[0]++;
            key[4] = 'true';
        }
        document.getElementById("answer").innerHTML = "解答数：" + key[0] + "/12"
        document.getElementById("message").innerHTML = "【問4 正解】<br>「リンパオ」の物語を紐解いた。"
        elem = document.getElementById("osushi")
        elem.classList.add("show")
        elem.classList.remove("hide")
    }else if(a5.includes(textbox)){
        if(key[5] != 'true'){
            key[0]++;
            key[5] = 'true';
        }
        document.getElementById("answer").innerHTML = "解答数：" + key[0] + "/12"
        document.getElementById("message").innerHTML = "【問5 正解】<br>「エスコバルド」の物語を紐解いた。"
        elem = document.getElementById("henrei")
        elem.classList.add("show")
        elem.classList.remove("hide")
    }else if(a6.includes(textbox)){
        if(key[6] != 'true'){
            key[0]++;
            key[6] = 'true';
        }
        document.getElementById("answer").innerHTML = "解答数：" + key[0] + "/12"
        document.getElementById("message").innerHTML = "【問6 正解】<br>「エバーラスト」の物語を紐解いた。"
        elem = document.getElementById("seigi")
        elem.classList.add("show")
        elem.classList.remove("hide")
    }else if(a7.includes(textbox)){
        if(key[7] != 'true'){
            key[0]++;
            key[7] = 'true';
        }
        document.getElementById("answer").innerHTML = "解答数：" + key[0] + "/12"
        document.getElementById("message").innerHTML = "【問7 正解】<br>「ソウル・フェニックス」の物語を紐解いた。"
        elem = document.getElementById("taiyou")
        elem.classList.add("show")
        elem.classList.remove("hide")
    }else if(a8.includes(textbox)){
        if(key[8] != 'true'){
            key[0]++;
            key[8] = 'true';
        }
        document.getElementById("answer").innerHTML = "解答数：" + key[0] + "/12"
        document.getElementById("message").innerHTML = "【問8 正解】<br>「ウラギリダムス」の物語を紐解いた。"
        elem = document.getElementById("13")
        elem.classList.add("show")
        elem.classList.remove("hide")
    }else if(a9.includes(textbox)){
        if(key[9] != 'true'){
            key[0]++;
            key[9] = 'true';
        }
        document.getElementById("answer").innerHTML = "解答数：" + key[0] + "/12"
        document.getElementById("message").innerHTML = "【問9 正解】<br>「マクシミリアン王」の物語を紐解いた。"
        elem = document.getElementById("madan")
        elem.classList.add("show")
        elem.classList.remove("hide")
    }else if(a10.includes(textbox)){
        if(key[10] != 'true'){
            key[0]++;
            key[10] = 'true';
        }
        document.getElementById("answer").innerHTML = "解答数：" + key[0] + "/12"
        document.getElementById("message").innerHTML = "【問10 正解】<br>「キング・ザ・スロットン」の物語を紐解いた。"
        elem = document.getElementById("casino")
        elem.classList.add("show")
        elem.classList.remove("hide")
    }else if(a11.includes(textbox)){
        if(key[11] != 'true'){
            key[0]++;
            key[11] = 'true';
        }
        document.getElementById("answer").innerHTML = "解答数：" + key[0] + "/12"
        document.getElementById("message").innerHTML = "【問11 正解】<br>「シャークウガ」の物語を紐解いた。"
        elem = document.getElementById("same")
        elem.classList.add("show")
        elem.classList.remove("hide")
    }else if(a12.includes(textbox)){
        if(key[12] != 'true'){
            key[0]++;
            key[12] = 'true';
        }
        document.getElementById("answer").innerHTML = "解答数：" + key[0] + "/12"
        document.getElementById("message").innerHTML = "【問12 正解】<br>「ゼーロ」の物語を紐解いた。"
        elem = document.getElementById("zero")
        elem.classList.add("show")
        elem.classList.remove("hide")
    }
    if(key[0] >= 12){

    }
}