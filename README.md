# はじめに

## Vue 3 へのアップグレード

このリポジトリは Vue 3 にアップグレードされました。主な変更点：

- Vue 2.x から Vue 3.x へ CDN を更新
- `new Vue()` から `createApp()` へ変更
- `data` オプションは関数として定義
- `filters` は削除され、代わりに `methods` または computed properties を使用
- Vue Router は v3 から v4 へアップグレード
- `new VueRouter()` から `createRouter()` と `createWebHashHistory()` へ変更

利用している JS
[jsdeliver](https://www.jsdelivr.com/)

| タイトル                                                                           | 説明                                                               |
| :--------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| [HelloVue.js](https://ymd65536.github.io/vue-beginner/hello_vue/)                           | 基本のキ                                                           |
| [todo 管理](https://ymd65536.github.io/vue-beginner/todo_manage/)                           | やること管理系サンプル                                             |
| [bitcoin 表示](https://ymd65536.github.io/vue-beginner/bitcoin/)                            | ビットコインの価格表示                                             |
| [Qiita 記事 リアルタイム検索](https://ymd65536.github.io/vue-beginner/vue-qiita-real-time/) | Qiita 記事を API を用いて検索、記事名とリンクと Likes を取得する。 |
| [鉄道情報遅延情報 表示](https://ymd65536.github.io/vue-beginner/tetsudo/) | 鉄道遅延情報を取得して表示する。 |

## ざっくりと

## 注意事項

## よくあるエラー

## はじめの一歩

## Vue.js を使うには

Vue.js を扱うためのアプリケーションインスタンス、Vue アプリケーションが必要

## インスタンスのプロパティ

### 書き方の例

```javascript
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      bpi: null,
      hasError: false,
      loading: true,
    }
  },
  methods: {
    hello() {},
  },
  mounted() {},
}).mount("#app");
```

### el

Vue.js を適用するタグを指定するプロパティのこと

### data

Vue.js 上で扱う変数を定義するプロパティのこと  
Vue 3 では data は関数として定義し、オブジェクトを返す必要があります。

### methods

Vue.js 上で扱う関数を定義するプロパティのこと  
※s をつけ忘れない！！

### mounted

インスタンスがマウントされたときに実行されるプロパティのこと  
※タグに Vue.js が適用された瞬間

### ディレクティブ

> ディレクティブとは  
> コンピュータプログラムのソースコードに記述される要素の一つで  
> そのコードを解釈・変換するソフトウェア（コンパイラやプリプロセッサなど）への  
> 指示や指定などを与えるためのもの。

要するに命令文の一種と捉えておけば OK  
HTML ならばドックタイプに相当する。

Vue.js では v-～始まるディレクティブをタグの属性として付与することで  
Vue による操作が可能になる。

## ディレクティブの種類

### v-bind

任意のタグに属性を付与する。

### v-if

任意のタグに対して表示非表示の条件をつける。  
タグを挿入しない。たくさん入れると遅くなる。

### v-show

任意のタグに対して表示非表示の条件をつける。  
CSS を適用する。
**_ポイント_**

### v-for

ざっくり言えば、VueJ.js におけるループ文  
foreach 的な使い方をする場合は値,キーという順で書く。  
rate が値、currency がキーの時は以下のように書く。

```javascript

  <li v-for="(rate,currency ) in bpi">
    {{ currency }} : {{ rate.rate_float | curencyDecimal}}
  </li>

```

### v-on

## マスタッシュ構文

別名：口ひげ構文

Vue.js では変数展開時に用いる。

```javascript
{
  {
  }
}
```

## 具体的な手順

## テンプレート構文
