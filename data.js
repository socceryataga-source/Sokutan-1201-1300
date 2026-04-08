const QUIZ_META = { min: 1201, max: 1300 };
const WORD_DATA = [
  {
    "serial": 1201,
    "wordNo": 1201,
    "word": "motivation",
    "answer": "動機づけ",
    "options": [
      "能力",
      "努力",
      "態度",
      "動機づけ"
    ],
    "example": "Some students have no motivation to learn a second language.",
    "translation": "第二言語を学ぶ意欲がない学生もいる。"
  },
  {
    "serial": 1202,
    "wordNo": 1202,
    "word": "incentive",
    "answer": "動機",
    "options": [
      "評価",
      "報酬",
      "動機",
      "規則"
    ],
    "example": "You have a huge incentive to study hard.",
    "translation": "あなたには一生懸命勉強する大きな動機がある。"
  },
  {
    "serial": 1203,
    "wordNo": 1203,
    "word": "inspire",
    "answer": "鼓舞する",
    "options": [
      "救う",
      "鼓舞する",
      "支える",
      "驚かす"
    ],
    "example": "Her victory at the championship really inspired me to try harder.",
    "translation": "彼女のその選手権での優勝は，私をさらに努力するよう奮い立たせた。"
  },
  {
    "serial": 1204,
    "wordNo": 1204,
    "word": "vote",
    "answer": "投票する",
    "options": [
      "抗議する",
      "支持する",
      "投票する",
      "立候補する"
    ],
    "example": "People aged 18 and over can now vote in Japan.",
    "translation": "日本では現在は18歳以上の人々が投票できる。"
  },
  {
    "serial": 1205,
    "wordNo": 1205,
    "word": "elect",
    "answer": "選ぶ",
    "options": [
      "任命する",
      "選ぶ",
      "訓練する",
      "訪ねる"
    ],
    "example": "He was elected chair of the university.",
    "translation": "彼は大学の理事長に選ばれた。"
  },
  {
    "serial": 1206,
    "wordNo": 1206,
    "word": "surgeon",
    "answer": "外科医",
    "options": [
      "看護師",
      "患者",
      "外科医",
      "薬剤師"
    ],
    "example": "The surgeon completed the operation in less than 2 hours.",
    "translation": "その外科医は2時間未満でその手術を終えた。"
  },
  {
    "serial": 1207,
    "wordNo": 1207,
    "word": "former",
    "answer": "以前の",
    "options": [
      "以前の",
      "主要な",
      "一時的な",
      "正式な"
    ],
    "example": "My former teacher is now working in China.",
    "translation": "私の以前の先生は今中国で働いている。"
  },
  {
    "serial": 1208,
    "wordNo": 1208,
    "word": "latter",
    "answer": "後者の",
    "options": [
      "最後の",
      "前者の",
      "後者の",
      "最近の"
    ],
    "example": "Of the two designs, I like the latter one better.",
    "translation": "その二つのデザインのうち、私は後者のほうが好きです。"
  },
  {
    "serial": 1209,
    "wordNo": 1209,
    "word": "tolerate",
    "answer": "許す",
    "options": [
      "避ける",
      "許す",
      "拒む",
      "隠す"
    ],
    "example": "I will not tolerate this bad behavior.",
    "translation": "私はこの悪い振る舞いを許容しない。"
  },
  {
    "serial": 1210,
    "wordNo": 1210,
    "word": "endure",
    "answer": "耐える",
    "options": [
      "防ぐ",
      "耐える",
      "支える",
      "抑える"
    ],
    "example": "I endured the long meeting without complaining.",
    "translation": "私は文句を言うことなく，その長い会議に耐えた。"
  },
  {
    "serial": 1211,
    "wordNo": 1211,
    "word": "temper",
    "answer": "気性",
    "options": [
      "勇気",
      "気性",
      "印象",
      "習慣"
    ],
    "example": "She lost her temper and started to shout at me.",
    "translation": "彼女はカッとなって私に怒鳴り始めた。"
  },
  {
    "serial": 1212,
    "wordNo": 1212,
    "word": "primarily",
    "answer": "主に",
    "options": [
      "静かに",
      "急に",
      "特に",
      "主に"
    ],
    "example": "The target group for the fashion is primarily high school students.",
    "translation": "このファッションのターゲット層は主に高校生である。"
  },
  {
    "serial": 1213,
    "wordNo": 1213,
    "word": "refuse",
    "answer": "断る",
    "options": [
      "疑う",
      "認める",
      "報告する",
      "断る"
    ],
    "example": "She refused to apologize as she had done nothing wrong.",
    "translation": "彼女は何も悪いことはしていないので謝ることを拒否した。"
  },
  {
    "serial": 1214,
    "wordNo": 1214,
    "word": "deny",
    "answer": "否定する",
    "options": [
      "確認する",
      "提案する",
      "否定する",
      "説明する"
    ],
    "example": "The boy denied that he had taken the money.",
    "translation": "その少年はその金を取ったことを否定した。"
  },
  {
    "serial": 1215,
    "wordNo": 1215,
    "word": "reject",
    "answer": "拒絶する",
    "options": [
      "受け入れる",
      "保存する",
      "拒絶する",
      "修理する"
    ],
    "example": "They rejected our offer to buy their house.",
    "translation": "彼らは，彼らの家を買うという我々の申し出を拒否した。"
  },
  {
    "serial": 1216,
    "wordNo": 1216,
    "word": "shorten",
    "answer": "短くする",
    "options": [
      "深める",
      "短くする",
      "弱める",
      "広げる"
    ],
    "example": "Lack of sleep can shorten your life.",
    "translation": "睡眠不足は寿命を縮める可能性がある。"
  },
  {
    "serial": 1217,
    "wordNo": 1217,
    "word": "scary",
    "answer": "恐ろしい",
    "options": [
      "危険な",
      "恐ろしい",
      "面白い",
      "不思議な"
    ],
    "example": "That dog looks really scary.",
    "translation": "あの犬は本当に怖そうに見える。"
  },
  {
    "serial": 1218,
    "wordNo": 1218,
    "word": "submit",
    "answer": "提出する",
    "options": [
      "印刷する",
      "共有する",
      "提出する",
      "訂正する"
    ],
    "example": "Please submit your report by Friday.",
    "translation": "金曜日までにレポートを提出してください。"
  },
  {
    "serial": 1219,
    "wordNo": 1219,
    "word": "conform",
    "answer": "従う",
    "options": [
      "反対する",
      "協力する",
      "従う",
      "主張する"
    ],
    "example": "There is a lot of pressure to conform to social roles.",
    "translation": "社会的役割に従わなければならないという大きなプレッシャーがある。"
  },
  {
    "serial": 1220,
    "wordNo": 1220,
    "word": "annual",
    "answer": "年1回の",
    "options": [
      "毎日の",
      "臨時の",
      "年1回の",
      "季節の"
    ],
    "example": "I just had my annual physical checkup.",
    "translation": "年に1度の健康診断を受けたばかりだ。"
  },
  {
    "serial": 1221,
    "wordNo": 1221,
    "word": "millennium",
    "answer": "千年",
    "options": [
      "時代",
      "歴史",
      "百年",
      "千年"
    ],
    "example": "This city has over a millennium of history.",
    "translation": "この都市は1,000年以上の歴史をもっている。"
  },
  {
    "serial": 1222,
    "wordNo": 1222,
    "word": "session",
    "answer": "集まり",
    "options": [
      "休憩",
      "手続き",
      "説明",
      "集まり"
    ],
    "example": "The session lasted ten hours.",
    "translation": "その集会は10時間続いた。"
  },
  {
    "serial": 1223,
    "wordNo": 1223,
    "word": "conference",
    "answer": "会議",
    "options": [
      "試験",
      "演奏会",
      "講義",
      "会議"
    ],
    "example": "I am attending a conference on studying abroad this Saturday.",
    "translation": "私は今週土曜日に海外留学に関する会議に出席する。"
  },
  {
    "serial": 1224,
    "wordNo": 1224,
    "word": "worsen",
    "answer": "悪化する",
    "options": [
      "悪化する",
      "安定する",
      "成長する",
      "回復する"
    ],
    "example": "The weather is worsening, so we can't go to the park today.",
    "translation": "天気が悪くなってきているので，今日は公園に行けません。"
  },
  {
    "serial": 1225,
    "wordNo": 1225,
    "word": "fade",
    "answer": "色あせる",
    "options": [
      "色あせる",
      "固まる",
      "輝く",
      "広がる"
    ],
    "example": "The photograph has faded, but you should be able to recognize me.",
    "translation": "写真が色あせてしまったが，私を認識できるはずだ。"
  },
  {
    "serial": 1226,
    "wordNo": 1226,
    "word": "decay",
    "answer": "腐敗する",
    "options": [
      "凍る",
      "乾く",
      "発酵する",
      "腐敗する"
    ],
    "example": "Vacuum packing can prevent food from decaying.",
    "translation": "真空包装は食品が腐るのを防ぐことができる。"
  },
  {
    "serial": 1227,
    "wordNo": 1227,
    "word": "advise",
    "answer": "助言する",
    "options": [
      "罰する",
      "命令する",
      "助言する",
      "雇う"
    ],
    "example": "My parents advised me to spend the summer relaxing.",
    "translation": "両親は私に夏をのんびり過ごすよう勧めた。"
  },
  {
    "serial": 1228,
    "wordNo": 1228,
    "word": "intake",
    "answer": "摂取量",
    "options": [
      "消費量",
      "速度",
      "費用",
      "摂取量"
    ],
    "example": "A person's recommended daily intake of water is said to be 3.5 liters.",
    "translation": "人の1日の推奨水分摂取量は3.5リットルと言われている。"
  },
  {
    "serial": 1229,
    "wordNo": 1229,
    "word": "harm",
    "answer": "害",
    "options": [
      "害",
      "圧力",
      "利益",
      "治療"
    ],
    "example": "Smoking can do serious harm to your health.",
    "translation": "喫煙は健康に深刻な害を与えることがあります。"
  },
  {
    "serial": 1230,
    "wordNo": 1230,
    "word": "altitude",
    "answer": "高度",
    "options": [
      "角度",
      "高度",
      "深さ",
      "湿度"
    ],
    "example": "As you reach higher altitudes, it becomes more difficult to breathe.",
    "translation": "標高が高くなるにつれて呼吸が難しくなる。"
  },
  {
    "serial": 1231,
    "wordNo": 1231,
    "word": "overlook",
    "answer": "見落とす",
    "options": [
      "数える",
      "見落とす",
      "修正する",
      "発見する"
    ],
    "example": "The teacher overlooked a few simple mistakes.",
    "translation": "その先生はいくつかの単純なミスを見落とした。"
  },
  {
    "serial": 1232,
    "wordNo": 1232,
    "word": "register",
    "answer": "記録する",
    "options": [
      "削除する",
      "計算する",
      "記録する",
      "印刷する"
    ],
    "example": "The system registers every visitor who enters the building.",
    "translation": "そのシステムは建物に入る来訪者全員を記録します。"
  },
  {
    "serial": 1233,
    "wordNo": 1233,
    "word": "log",
    "answer": "丸太",
    "options": [
      "柱",
      "屋根",
      "丸太",
      "石材"
    ],
    "example": "There is a small log house on the hill.",
    "translation": "丘の上に小さな丸太小屋がある。"
  },
  {
    "serial": 1234,
    "wordNo": 1234,
    "word": "intact",
    "answer": "無傷の",
    "options": [
      "完全な",
      "最新の",
      "透明な",
      "無傷の"
    ],
    "example": "After the war, few buildings in the city remained intact.",
    "translation": "戦後，その都市で無傷で残った建物はほとんどなかった。"
  },
  {
    "serial": 1235,
    "wordNo": 1235,
    "word": "entry",
    "answer": "入場",
    "options": [
      "集合",
      "到着",
      "入場",
      "退場"
    ],
    "example": "There is no entry fee for children under twelve.",
    "translation": "12歳未満の子どもは入場料がかかりません。"
  },
  {
    "serial": 1236,
    "wordNo": 1236,
    "word": "chest",
    "answer": "胸",
    "options": [
      "胸",
      "喉",
      "背中",
      "肩"
    ],
    "example": "I had to have a chest x-ray before I could start work.",
    "translation": "仕事を始められるようになる前に胸部X線検査を受けなければならなかった。"
  },
  {
    "serial": 1237,
    "wordNo": 1237,
    "word": "meaningful",
    "answer": "意義のある",
    "options": [
      "意義のある",
      "退屈な",
      "複雑な",
      "伝統的な"
    ],
    "example": "This job is so meaningful to me.",
    "translation": "私にとってこの仕事は非常に意義がある。"
  },
  {
    "serial": 1238,
    "wordNo": 1238,
    "word": "diabetes",
    "answer": "糖尿病",
    "options": [
      "頭痛",
      "肺炎",
      "糖尿病",
      "貧血"
    ],
    "example": "Diabetes is often caused by an unhealthy diet and a lack of exercise.",
    "translation": "糖尿病は多くの場合，不健康な食事と運動不足によって引き起こされる。"
  },
  {
    "serial": 1239,
    "wordNo": 1239,
    "word": "mold",
    "answer": "型",
    "options": [
      "布",
      "泥",
      "底",
      "型"
    ],
    "example": "She poured the jelly into heart-shaped molds.",
    "translation": "彼女はハートの形をした型にゼリーを流し込んだ。"
  },
  {
    "serial": 1240,
    "wordNo": 1240,
    "word": "bend",
    "answer": "曲げる",
    "options": [
      "削る",
      "並べる",
      "包む",
      "曲げる"
    ],
    "example": "Do not bend the metal bar by force.",
    "translation": "その金属の棒を無理に曲げないでください。"
  },
  {
    "serial": 1241,
    "wordNo": 1241,
    "word": "twist",
    "answer": "ひねる",
    "options": [
      "ひねる",
      "割る",
      "押す",
      "伸ばす"
    ],
    "example": "When I was running, I twisted my ankle and it really hurts.",
    "translation": "走っていたら足首をひねってしまって，本当に痛いんです。"
  },
  {
    "serial": 1242,
    "wordNo": 1242,
    "word": "carve",
    "answer": "彫る",
    "options": [
      "塗る",
      "彫る",
      "測る",
      "切る"
    ],
    "example": "Two students carved their names into their desks.",
    "translation": "２人の生徒が机に自分の名前を彫った。"
  },
  {
    "serial": 1243,
    "wordNo": 1243,
    "word": "maximum",
    "answer": "最大の",
    "options": [
      "平均の",
      "最小の",
      "最大の",
      "標準の"
    ],
    "example": "This bus can carry a maximum of fifty people.",
    "translation": "このバスは最大で50人を運べます。"
  },
  {
    "serial": 1244,
    "wordNo": 1244,
    "word": "importantly",
    "answer": "重要なことには",
    "options": [
      "明らかに",
      "たまたま",
      "重要なことには",
      "おそらく"
    ],
    "example": "Most importantly, you must have the motivation to succeed.",
    "translation": "最も重要なこととして，成功するためのモチベーションを持たなければならない。"
  },
  {
    "serial": 1245,
    "wordNo": 1245,
    "word": "clinic",
    "answer": "診療所",
    "options": [
      "診療所",
      "研究所",
      "薬局",
      "保育園"
    ],
    "example": "The clinic was so crowded that I had to wait for hours.",
    "translation": "診療所が非常に混んでいたため，何時間も待たなければならなかった。"
  },
  {
    "serial": 1246,
    "wordNo": 1246,
    "word": "scan",
    "answer": "細かく調べる",
    "options": [
      "細かく調べる",
      "混ぜる",
      "印刷する",
      "並べる"
    ],
    "example": "The police scanned the area for any sign of the missing dog.",
    "translation": "警察は行方不明の犬の手がかりがないか、その地域を細かく調べました。"
  },
  {
    "serial": 1247,
    "wordNo": 1247,
    "word": "analysis",
    "answer": "分析",
    "options": [
      "分析",
      "会話",
      "発明",
      "翻訳"
    ],
    "example": "Something is wrong with our analysis.",
    "translation": "私たちの分析には何か間違いがある。"
  },
  {
    "serial": 1248,
    "wordNo": 1248,
    "word": "depart",
    "answer": "出発する",
    "options": [
      "到着する",
      "停止する",
      "移動する",
      "出発する"
    ],
    "example": "Your train departs at 11 o'clock.",
    "translation": "君が乗る列車は11時に出発する。"
  },
  {
    "serial": 1249,
    "wordNo": 1249,
    "word": "expedition",
    "answer": "遠征",
    "options": [
      "儀式",
      "遠征",
      "競争",
      "祝祭"
    ],
    "example": "The researchers set off on the expedition to the Antarctic a month ago.",
    "translation": "その研究者たちは１カ月前に南極の探検に出発した。"
  },
  {
    "serial": 1250,
    "wordNo": 1250,
    "word": "voyage",
    "answer": "航海",
    "options": [
      "飛行",
      "通勤",
      "散歩",
      "航海"
    ],
    "example": "We decided to go on a long sea voyage as a special holiday.",
    "translation": "私たちは特別休暇として長い船旅に出ることにした。"
  },
  {
    "serial": 1251,
    "wordNo": 1251,
    "word": "palace",
    "answer": "宮殿",
    "options": [
      "庭園",
      "寺院",
      "塔",
      "宮殿"
    ],
    "example": "The tourists took lots of pictures of Buckingham Palace.",
    "translation": "その観光客たちはバッキンガム宮殿の写真をたくさん撮った。"
  },
  {
    "serial": 1252,
    "wordNo": 1252,
    "word": "primitive",
    "answer": "原始的な",
    "options": [
      "原始的な",
      "人工の",
      "平和な",
      "近代的な"
    ],
    "example": "The museum now features life in primitive societies.",
    "translation": "その博物館では現在，原始社会の生活をテーマとして展示を行っている。"
  },
  {
    "serial": 1253,
    "wordNo": 1253,
    "word": "archaeologist",
    "answer": "考古学者",
    "options": [
      "考古学者",
      "弁護士",
      "化学者",
      "建築家"
    ],
    "example": "Archaeologists have recently discovered new rooms in the Pyramid of Giza.",
    "translation": "考古学者は最近，ギザのピラミッドで新しい部屋を発見した。"
  },
  {
    "serial": 1254,
    "wordNo": 1254,
    "word": "leather",
    "answer": "革",
    "options": [
      "木材",
      "綿",
      "絹",
      "革"
    ],
    "example": "These gloves are made of soft leather.",
    "translation": "これらの手袋は柔らかい革でできています。"
  },
  {
    "serial": 1255,
    "wordNo": 1255,
    "word": "fur",
    "answer": "毛皮",
    "options": [
      "牙",
      "羽",
      "毛皮",
      "角"
    ],
    "example": "The woman in the fur coat over there is my mother.",
    "translation": "あそこにいる毛皮のコートの女性は私の母です。"
  },
  {
    "serial": 1256,
    "wordNo": 1256,
    "word": "instrument",
    "answer": "器具",
    "options": [
      "装飾",
      "指示",
      "器具",
      "部品"
    ],
    "example": "This medical instrument is used in eye examinations.",
    "translation": "この器具は目の検査で使われます。"
  },
  {
    "serial": 1257,
    "wordNo": 1257,
    "word": "mud",
    "answer": "泥",
    "options": [
      "霧",
      "泥",
      "砂",
      "灰"
    ],
    "example": "Take your shoes off as they have mud on them.",
    "translation": "泥がついているから靴を脱ぎなさい。"
  },
  {
    "serial": 1258,
    "wordNo": 1258,
    "word": "dirt",
    "answer": "汚れ",
    "options": [
      "影",
      "香り",
      "汚れ",
      "波"
    ],
    "example": "He removed the dirt from the shoes with a brush.",
    "translation": "彼はブラシで靴の汚れを取り除いた。"
  },
  {
    "serial": 1259,
    "wordNo": 1259,
    "word": "clay",
    "answer": "粘土",
    "options": [
      "金属",
      "砂利",
      "粘土",
      "岩"
    ],
    "example": "In class we made our own mugs using clay.",
    "translation": "私たちは，授業で粘土を使って自分のマグカップを作った。"
  },
  {
    "serial": 1260,
    "wordNo": 1260,
    "word": "stream",
    "answer": "小川",
    "options": [
      "波",
      "港",
      "小川",
      "岸"
    ],
    "example": "We sat beside a quiet stream and ate our lunch.",
    "translation": "私たちは静かな小川のそばに座って昼食を食べました。"
  },
  {
    "serial": 1261,
    "wordNo": 1261,
    "word": "weave",
    "answer": "織る",
    "options": [
      "運ぶ",
      "織る",
      "集める",
      "飾る"
    ],
    "example": "I watched a demonstration of traditional silk weaving.",
    "translation": "伝統的な絹織りの実演を見た。"
  },
  {
    "serial": 1262,
    "wordNo": 1262,
    "word": "dye",
    "answer": "染める",
    "options": [
      "切る",
      "乾かす",
      "染める",
      "磨く"
    ],
    "example": "He decided to dye his hair brown when he started college.",
    "translation": "彼は大学に通い始めた時，髪を茶色に染めることを決めた。"
  },
  {
    "serial": 1263,
    "wordNo": 1263,
    "word": "currency",
    "answer": "通貨",
    "options": [
      "値段",
      "通貨",
      "景気",
      "税金"
    ],
    "example": "I need to change my money into the local currency.",
    "translation": "私は自分のお金を現地通貨に両替する必要がある。"
  },
  {
    "serial": 1264,
    "wordNo": 1264,
    "word": "contemporary",
    "answer": "現代の",
    "options": [
      "古代の",
      "個人的な",
      "現代の",
      "地方の"
    ],
    "example": "I am not that fond of contemporary music.",
    "translation": "私は現代音楽がそれほど好きではない。"
  },
  {
    "serial": 1265,
    "wordNo": 1265,
    "word": "escape",
    "answer": "逃げる",
    "options": [
      "追う",
      "渡る",
      "逃げる",
      "隠す"
    ],
    "example": "I wanted to escape from the city for a few days.",
    "translation": "私は数日間都会から離れたかった。"
  },
  {
    "serial": 1266,
    "wordNo": 1266,
    "word": "refugee",
    "answer": "難民",
    "options": [
      "移民",
      "観光客",
      "難民",
      "警備員"
    ],
    "example": "A boat carrying 50 refugees sank and only a few survived.",
    "translation": "50人の難民を乗せたボートが沈没し，数人だけが生き残った。"
  },
  {
    "serial": 1267,
    "wordNo": 1267,
    "word": "inspect",
    "answer": "検査する",
    "options": [
      "宣伝する",
      "整理する",
      "修理する",
      "検査する"
    ],
    "example": "We carefully inspect all our goods before we ship them to our customers.",
    "translation": "私たちは商品を顧客に発送する前に，すべての商品を注意深く検査する。"
  },
  {
    "serial": 1268,
    "wordNo": 1268,
    "word": "cycle",
    "answer": "周期",
    "options": [
      "温度",
      "周期",
      "速度",
      "方向"
    ],
    "example": "Many animals follow a daily cycle of sleep and activity.",
    "translation": "多くの動物は睡眠と活動の一日の周期に従っています。"
  },
  {
    "serial": 1269,
    "wordNo": 1269,
    "word": "circle",
    "answer": "円",
    "options": [
      "面",
      "角",
      "円",
      "線"
    ],
    "example": "The children all stood in a circle.",
    "translation": "子供たちはみんな輪になって立った。"
  },
  {
    "serial": 1270,
    "wordNo": 1270,
    "word": "circulation",
    "answer": "循環",
    "options": [
      "拡大",
      "密集",
      "循環",
      "回転"
    ],
    "example": "Poor blood circulation can cause many diseases.",
    "translation": "血液の循環が悪いと多くの病気を引き起こす可能性がある。"
  },
  {
    "serial": 1271,
    "wordNo": 1271,
    "word": "pile",
    "answer": "積み重ね",
    "options": [
      "列",
      "束",
      "容器",
      "積み重ね"
    ],
    "example": "I finally washed the huge pile of dirty clothes in my room.",
    "translation": "私は自分の部屋にあった大量の汚れた服の山をようやく洗濯した。"
  },
  {
    "serial": 1272,
    "wordNo": 1272,
    "word": "fairly",
    "answer": "かなり",
    "options": [
      "完全に",
      "一時的に",
      "かなり",
      "普段は"
    ],
    "example": "It is fairly common for trains to be late in the UK.",
    "translation": "イギリスでは電車が遅れるのはかなり一般的なことだ。"
  },
  {
    "serial": 1273,
    "wordNo": 1273,
    "word": "resolve",
    "answer": "解決する",
    "options": [
      "延期する",
      "比較する",
      "解決する",
      "予想する"
    ],
    "example": "The couple couldn't resolve their differences and decided to break up.",
    "translation": "そのカップルは相違点を解決できず，別れることにした。"
  },
  {
    "serial": 1274,
    "wordNo": 1274,
    "word": "steadily",
    "answer": "着実に",
    "options": [
      "突然",
      "たまたま",
      "着実に",
      "別々に"
    ],
    "example": "Sales have increased steadily since last spring.",
    "translation": "売り上げは昨年の春から着実に伸びています。"
  },
  {
    "serial": 1275,
    "wordNo": 1275,
    "word": "length",
    "answer": "長さ",
    "options": [
      "量",
      "重さ",
      "幅",
      "長さ"
    ],
    "example": "Keep the length of your presentation to no more than 30 minutes.",
    "translation": "発表の長さは30分までにしてください。"
  },
  {
    "serial": 1276,
    "wordNo": 1276,
    "word": "sail",
    "answer": "航行する",
    "options": [
      "着陸する",
      "航行する",
      "停泊する",
      "乗車する"
    ],
    "example": "The ship sails for the United States.",
    "translation": "その船はアメリカ合衆国に向けて航行する。"
  },
  {
    "serial": 1277,
    "wordNo": 1277,
    "word": "navigate",
    "answer": "航行する",
    "options": [
      "移住する",
      "航行する",
      "回転する",
      "潜水する"
    ],
    "example": "In the past, sailors navigated by the stars.",
    "translation": "昔は船乗りは星を見て航行していた。"
  },
  {
    "serial": 1278,
    "wordNo": 1278,
    "word": "journey",
    "answer": "旅行",
    "options": [
      "乗客",
      "目的地",
      "道路",
      "旅行"
    ],
    "example": "Their journey across Hokkaido took three days.",
    "translation": "彼らの北海道横断の旅行には3日かかりました。"
  },
  {
    "serial": 1279,
    "wordNo": 1279,
    "word": "commute",
    "answer": "通勤する",
    "options": [
      "出張する",
      "集合する",
      "通勤する",
      "移住する"
    ],
    "example": "I have to commute to the office every day.",
    "translation": "私は毎日オフィスに通勤しなければならない。"
  },
  {
    "serial": 1280,
    "wordNo": 1280,
    "word": "luggage",
    "answer": "手荷物",
    "options": [
      "座席",
      "運賃",
      "旅券",
      "手荷物"
    ],
    "example": "I lost my luggage on the flight.",
    "translation": "飛行機で荷物を紛失した。"
  },
  {
    "serial": 1281,
    "wordNo": 1281,
    "word": "arise",
    "answer": "生じる",
    "options": [
      "消える",
      "減る",
      "続く",
      "生じる"
    ],
    "example": "Various health risks arise from an unhealthy diet.",
    "translation": "さまざまな健康リスクは不健康な食事に起因する。"
  },
  {
    "serial": 1282,
    "wordNo": 1282,
    "word": "migration",
    "answer": "移住",
    "options": [
      "移住",
      "輸出",
      "発見",
      "定住"
    ],
    "example": "There has been a large migration of people to the city.",
    "translation": "都市への人の大移動があった。"
  },
  {
    "serial": 1283,
    "wordNo": 1283,
    "word": "immigration",
    "answer": "移住",
    "options": [
      "入国審査",
      "移住",
      "留学",
      "観光"
    ],
    "example": "One way to solve the shortage of workers is to allow immigration.",
    "translation": "労働者不足を解決する一つの方法は他国からの移住を受け入れることだ。"
  },
  {
    "serial": 1284,
    "wordNo": 1284,
    "word": "inhabit",
    "answer": "住む",
    "options": [
      "訪れる",
      "守る",
      "離れる",
      "住む"
    ],
    "example": "Humans inhabit nearly every corner of the earth.",
    "translation": "人間は地球のほぼ全域をすみかとしている。"
  },
  {
    "serial": 1285,
    "wordNo": 1285,
    "word": "habitat",
    "answer": "生息地",
    "options": [
      "生息地",
      "巣",
      "群れ",
      "農地"
    ],
    "example": "The jungle is the natural habitat for thousands of different animals.",
    "translation": "ジャングルは何千種類もの動物にとって自然の生息地である。"
  },
  {
    "serial": 1286,
    "wordNo": 1286,
    "word": "duty",
    "answer": "義務",
    "options": [
      "権利",
      "名誉",
      "義務",
      "機会"
    ],
    "example": "One of the duties of my job is to clean the tables.",
    "translation": "私の職務の１つはテーブルをきれいにすることだ。"
  },
  {
    "serial": 1287,
    "wordNo": 1287,
    "word": "compel",
    "answer": "強いる",
    "options": [
      "許す",
      "誘う",
      "強いる",
      "慰める"
    ],
    "example": "The scandal compelled him to resign.",
    "translation": "そのスキャンダルにより，彼は辞任することを余儀なくされた。"
  },
  {
    "serial": 1288,
    "wordNo": 1288,
    "word": "steam",
    "answer": "蒸気",
    "options": [
      "湯",
      "霜",
      "蒸気",
      "煙"
    ],
    "example": "The coffee was so hot that steam was rising from it.",
    "translation": "コーヒーはとても熱かったので，湯気が立ち上っていた。"
  },
  {
    "serial": 1289,
    "wordNo": 1289,
    "word": "bubble",
    "answer": "泡",
    "options": [
      "雲",
      "泡",
      "しずく",
      "粒"
    ],
    "example": "Force out any air bubbles when applying the film to the screen.",
    "translation": "画面にフィルムを貼る際には気泡を外に押し出してください。"
  },
  {
    "serial": 1290,
    "wordNo": 1290,
    "word": "breathe",
    "answer": "呼吸する",
    "options": [
      "歩く",
      "叫ぶ",
      "呼吸する",
      "ささやく"
    ],
    "example": "I like going to the mountains and breathing the fresh air.",
    "translation": "私は山に行って新鮮な空気を吸うのが好きだ。"
  },
  {
    "serial": 1291,
    "wordNo": 1291,
    "word": "cross",
    "answer": "横切る",
    "options": [
      "横切る",
      "進入する",
      "回る",
      "追い越す"
    ],
    "example": "I crossed the street to get to the bank on the other side.",
    "translation": "私は向こう側の銀行に行くために通りを横切った。"
  },
  {
    "serial": 1292,
    "wordNo": 1292,
    "word": "destination",
    "answer": "目的地",
    "options": [
      "経由地",
      "目的地",
      "方角",
      "時刻表"
    ],
    "example": "We will reach our final destination at 3 o'clock.",
    "translation": "私たちは最終目的地に3時に着く。"
  },
  {
    "serial": 1293,
    "wordNo": 1293,
    "word": "lay",
    "answer": "置く",
    "options": [
      "借りる",
      "置く",
      "運ぶ",
      "落とす"
    ],
    "example": "Please lay your bag on the chair.",
    "translation": "かばんを椅子の上に置いてください。"
  },
  {
    "serial": 1294,
    "wordNo": 1294,
    "word": "layer",
    "answer": "層",
    "options": [
      "表面",
      "底",
      "枠",
      "層"
    ],
    "example": "He put a layer of sugar on top of the cake.",
    "translation": "彼はそのケーキの上に砂糖の層を加えた。"
  },
  {
    "serial": 1295,
    "wordNo": 1295,
    "word": "layout",
    "answer": "配置",
    "options": [
      "素材",
      "模様",
      "余白",
      "配置"
    ],
    "example": "The map shows the layout of the amusement park.",
    "translation": "その地図は遊園地のレイアウトを示している。"
  },
  {
    "serial": 1296,
    "wordNo": 1296,
    "word": "dispose",
    "answer": "処分する",
    "options": [
      "収集する",
      "分解する",
      "交換する",
      "処分する"
    ],
    "example": "We dispose of plastic waste on Mondays and burnable waste on Wednesdays.",
    "translation": "私たちはプラスチックゴミは月曜日に，可燃ゴミは水曜日に処分する。"
  },
  {
    "serial": 1297,
    "wordNo": 1297,
    "word": "scent",
    "answer": "香り",
    "options": [
      "気配",
      "香り",
      "味",
      "煙"
    ],
    "example": "The scent of the roses was really beautiful.",
    "translation": "そのバラの香りは本当に素晴らしかった。"
  },
  {
    "serial": 1298,
    "wordNo": 1298,
    "word": "shortly",
    "answer": "まもなく",
    "options": [
      "突然",
      "まもなく",
      "以前に",
      "しばしば"
    ],
    "example": "My father started a new business shortly after I graduated from college.",
    "translation": "私が大学を卒業してまもなく，父は新しい事業を始めた。"
  },
  {
    "serial": 1299,
    "wordNo": 1299,
    "word": "immediate",
    "answer": "即座の",
    "options": [
      "一時的な",
      "個人的な",
      "最終的な",
      "即座の"
    ],
    "example": "This injury needs the immediate attention of a doctor.",
    "translation": "このけがは緊急の医師の手当てが必要だ。"
  },
  {
    "serial": 1300,
    "wordNo": 1300,
    "word": "transport",
    "answer": "輸送する",
    "options": [
      "販売する",
      "保存する",
      "包装する",
      "輸送する"
    ],
    "example": "We will transport your goods to you at the end of this week.",
    "translation": "今週末に商品をお届けします。"
  }
];
