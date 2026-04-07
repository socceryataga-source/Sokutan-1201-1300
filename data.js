const quizData = [
  {
    "no": 1201,
    "word": "motivation",
    "meaning": "動機づけ",
    "choices": [
      "動機づけ",
      "努力",
      "態度",
      "能力"
    ],
    "sentence": "Some students have no motivation to learn a second language.",
    "translation": "第二言語を学ぶ意欲がない学生もいる。"
  },
  {
    "no": 1202,
    "word": "incentive",
    "meaning": "励み",
    "choices": [
      "励み",
      "報酬",
      "評価",
      "規則"
    ],
    "sentence": "You have a huge incentive to study hard.",
    "translation": "あなたには一生懸命勉強する大きな動機がある。"
  },
  {
    "no": 1203,
    "word": "inspire",
    "meaning": "鼓舞する",
    "choices": [
      "鼓舞する",
      "支える",
      "驚かす",
      "救う"
    ],
    "sentence": "Her victory at the championship really inspired me to try harder.",
    "translation": "彼女のその選手権での優勝は，私をさらに努力するよう奮い立たせた。"
  },
  {
    "no": 1204,
    "word": "vote",
    "meaning": "投票する",
    "choices": [
      "投票する",
      "抗議する",
      "立候補する",
      "支持する"
    ],
    "sentence": "People aged 18 and over can now vote in Japan.",
    "translation": "日本では現在は18歳以上の人々が投票できる。"
  },
  {
    "no": 1205,
    "word": "elect",
    "meaning": "選ぶ",
    "choices": [
      "選ぶ",
      "任命する",
      "訪ねる",
      "訓練する"
    ],
    "sentence": "He was elected chair of the university.",
    "translation": "彼は大学の理事長に選ばれた。"
  },
  {
    "no": 1206,
    "word": "surgeon",
    "meaning": "外科医",
    "choices": [
      "外科医",
      "看護師",
      "患者",
      "薬剤師"
    ],
    "sentence": "The surgeon completed the operation in less than 2 hours.",
    "translation": "その外科医は2時間未満でその手術を終えた。"
  },
  {
    "no": 1207,
    "word": "former",
    "meaning": "以前の",
    "choices": [
      "以前の",
      "一時的な",
      "正式な",
      "主要な"
    ],
    "sentence": "My former teacher is now working in China.",
    "translation": "私の以前の先生は今中国で働いている。"
  },
  {
    "no": 1208,
    "word": "latter",
    "meaning": "後者の",
    "choices": [
      "後者の",
      "最後の",
      "最近の",
      "前者の"
    ],
    "sentence": "Of the two designs, I like the latter one better.",
    "translation": "その二つのデザインのうち、私は後者のほうが好きです。"
  },
  {
    "no": 1209,
    "word": "tolerate",
    "meaning": "許す",
    "choices": [
      "許す",
      "避ける",
      "隠す",
      "拒む"
    ],
    "sentence": "I will not tolerate this bad behavior.",
    "translation": "私はこの悪い振る舞いを許容しない。"
  },
  {
    "no": 1210,
    "word": "endure",
    "meaning": "耐える",
    "choices": [
      "耐える",
      "支える",
      "防ぐ",
      "抑える"
    ],
    "sentence": "I endured the long meeting without complaining.",
    "translation": "私は文句を言うことなく，その長い会議に耐えた。"
  },
  {
    "no": 1211,
    "word": "temper",
    "meaning": "気性",
    "choices": [
      "気性",
      "勇気",
      "習慣",
      "印象"
    ],
    "sentence": "She lost her temper and started to shout at me.",
    "translation": "彼女はカッとなって私に怒鳴り始めた。"
  },
  {
    "no": 1212,
    "word": "primarily",
    "meaning": "主に",
    "choices": [
      "主に",
      "特に",
      "静かに",
      "急に"
    ],
    "sentence": "The target group for the fashion is primarily high school students.",
    "translation": "このファッションのターゲット層は主に高校生である。"
  },
  {
    "no": 1213,
    "word": "refuse",
    "meaning": "断る",
    "choices": [
      "断る",
      "疑う",
      "認める",
      "報告する"
    ],
    "sentence": "She refused to apologize as she had done nothing wrong.",
    "translation": "彼女は何も悪いことはしていないので謝ることを拒否した。"
  },
  {
    "no": 1214,
    "word": "deny",
    "meaning": "否定する",
    "choices": [
      "否定する",
      "説明する",
      "提案する",
      "確認する"
    ],
    "sentence": "The boy denied that he had taken the money.",
    "translation": "その少年はその金を取ったことを否定した。"
  },
  {
    "no": 1215,
    "word": "reject",
    "meaning": "拒絶する",
    "choices": [
      "拒絶する",
      "受け入れる",
      "保存する",
      "修理する"
    ],
    "sentence": "They rejected our offer to buy their house.",
    "translation": "彼らは，彼らの家を買うという我々の申し出を拒否した。"
  },
  {
    "no": 1216,
    "word": "shorten",
    "meaning": "短くする",
    "choices": [
      "短くする",
      "弱める",
      "広げる",
      "深める"
    ],
    "sentence": "Lack of sleep can shorten your life.",
    "translation": "睡眠不足は寿命を縮める可能性がある。"
  },
  {
    "no": 1217,
    "word": "scary",
    "meaning": "恐ろしい",
    "choices": [
      "恐ろしい",
      "不思議な",
      "危険な",
      "面白い"
    ],
    "sentence": "That dog looks really scary.",
    "translation": "あの犬は本当に怖そうに見える。"
  },
  {
    "no": 1218,
    "word": "submit",
    "meaning": "提出する",
    "choices": [
      "提出する",
      "訂正する",
      "共有する",
      "印刷する"
    ],
    "sentence": "Please submit your report by Friday.",
    "translation": "金曜日までにレポートを提出してください。"
  },
  {
    "no": 1219,
    "word": "conform",
    "meaning": "従う",
    "choices": [
      "従う",
      "反対する",
      "協力する",
      "主張する"
    ],
    "sentence": "There is a lot of pressure to conform to social roles.",
    "translation": "社会的役割に従わなければならないという大きなプレッシャーがある。"
  },
  {
    "no": 1220,
    "word": "annual",
    "meaning": "年1回の",
    "choices": [
      "年1回の",
      "毎日の",
      "季節の",
      "臨時の"
    ],
    "sentence": "I just had my annual physical checkup.",
    "translation": "年に1度の健康診断を受けたばかりだ。"
  },
  {
    "no": 1221,
    "word": "millennium",
    "meaning": "千年",
    "choices": [
      "千年",
      "百年",
      "時代",
      "歴史"
    ],
    "sentence": "This city has over a millennium of history.",
    "translation": "この都市は1,000年以上の歴史をもっている。"
  },
  {
    "no": 1222,
    "word": "session",
    "meaning": "集まり",
    "choices": [
      "集まり",
      "休憩",
      "説明",
      "手続き"
    ],
    "sentence": "The session lasted ten hours.",
    "translation": "その集会は10時間続いた。"
  },
  {
    "no": 1223,
    "word": "conference",
    "meaning": "会議",
    "choices": [
      "会議",
      "講義",
      "試験",
      "演奏会"
    ],
    "sentence": "I am attending a conference on studying abroad this Saturday.",
    "translation": "私は今週土曜日に海外留学に関する会議に出席する。"
  },
  {
    "no": 1224,
    "word": "worsen",
    "meaning": "悪化する",
    "choices": [
      "悪化する",
      "成長する",
      "安定する",
      "回復する"
    ],
    "sentence": "The weather is worsening, so we can't go to the park today.",
    "translation": "天気が悪くなってきているので，今日は公園に行けません。"
  },
  {
    "no": 1225,
    "word": "fade",
    "meaning": "あせる",
    "choices": [
      "あせる",
      "輝く",
      "広がる",
      "固まる"
    ],
    "sentence": "The photograph has faded, but you should be able to recognize me.",
    "translation": "写真が色あせてしまったが，私を認識できるはずだ。"
  },
  {
    "no": 1226,
    "word": "decay",
    "meaning": "腐敗する",
    "choices": [
      "腐敗する",
      "発酵する",
      "乾く",
      "凍る"
    ],
    "sentence": "Vacuum packing can prevent food from decaying.",
    "translation": "真空包装は食品が腐るのを防ぐことができる。"
  },
  {
    "no": 1227,
    "word": "advise",
    "meaning": "助言する",
    "choices": [
      "助言する",
      "命令する",
      "雇う",
      "罰する"
    ],
    "sentence": "My parents advised me to spend the summer relaxing.",
    "translation": "両親は私に夏をのんびり過ごすよう勧めた。"
  },
  {
    "no": 1228,
    "word": "intake",
    "meaning": "摂取量",
    "choices": [
      "摂取量",
      "消費量",
      "速度",
      "費用"
    ],
    "sentence": "A person's recommended daily intake of water is said to be 3.5 liters.",
    "translation": "人の1日の推奨水分摂取量は3.5リットルと言われている。"
  },
  {
    "no": 1229,
    "word": "harm",
    "meaning": "害",
    "choices": [
      "害",
      "利益",
      "治療",
      "圧力"
    ],
    "sentence": "Smoking can do serious harm to your health.",
    "translation": "喫煙は健康に深刻な害を与えることがあります。"
  },
  {
    "no": 1230,
    "word": "altitude",
    "meaning": "高度",
    "choices": [
      "高度",
      "湿度",
      "角度",
      "深さ"
    ],
    "sentence": "As you reach higher altitudes, it becomes more difficult to breathe.",
    "translation": "標高が高くなるにつれて呼吸が難しくなる。"
  },
  {
    "no": 1231,
    "word": "overlook",
    "meaning": "見落とす",
    "choices": [
      "見落とす",
      "発見する",
      "数える",
      "修正する"
    ],
    "sentence": "The teacher overlooked a few simple mistakes.",
    "translation": "その先生はいくつかの単純なミスを見落とした。"
  },
  {
    "no": 1232,
    "word": "register",
    "meaning": "記録する",
    "choices": [
      "記録する",
      "登録する",
      "削除する",
      "印刷する"
    ],
    "sentence": "The system registers every visitor who enters the building.",
    "translation": "そのシステムは建物に入る来訪者全員を記録します。"
  },
  {
    "no": 1233,
    "word": "log",
    "meaning": "丸太",
    "choices": [
      "丸太",
      "石材",
      "柱",
      "屋根"
    ],
    "sentence": "There is a small log house on the hill.",
    "translation": "丘の上に小さな丸太小屋がある。"
  },
  {
    "no": 1234,
    "word": "intact",
    "meaning": "無傷の",
    "choices": [
      "無傷の",
      "完全な",
      "透明な",
      "最新の"
    ],
    "sentence": "After the war, few buildings in the city remained intact.",
    "translation": "戦後，その都市で無傷で残った建物はほとんどなかった。"
  },
  {
    "no": 1235,
    "word": "entry",
    "meaning": "入場",
    "choices": [
      "入場",
      "退場",
      "集合",
      "到着"
    ],
    "sentence": "There is no entry fee for children under twelve.",
    "translation": "12歳未満の子どもは入場料がかかりません。"
  },
  {
    "no": 1236,
    "word": "chest",
    "meaning": "胸",
    "choices": [
      "胸",
      "肩",
      "背中",
      "喉"
    ],
    "sentence": "I had to have a chest x-ray before I could start work.",
    "translation": "仕事を始められるようになる前に胸部X線検査を受けなければならなかった。"
  },
  {
    "no": 1237,
    "word": "meaningful",
    "meaning": "意義のある",
    "choices": [
      "意義のある",
      "伝統的な",
      "複雑な",
      "退屈な"
    ],
    "sentence": "This job is so meaningful to me.",
    "translation": "私にとってこの仕事は非常に意義がある。"
  },
  {
    "no": 1238,
    "word": "diabetes",
    "meaning": "糖尿病",
    "choices": [
      "糖尿病",
      "肺炎",
      "貧血",
      "頭痛"
    ],
    "sentence": "Diabetes is often caused by an unhealthy diet and a lack of exercise.",
    "translation": "糖尿病は多くの場合，不健康な食事と運動不足によって引き起こされる。"
  },
  {
    "no": 1239,
    "word": "mold",
    "meaning": "型",
    "choices": [
      "型",
      "布",
      "泥",
      "底"
    ],
    "sentence": "She poured the jelly into heart-shaped molds.",
    "translation": "彼女はハートの形をした型にゼリーを流し込んだ。"
  },
  {
    "no": 1240,
    "word": "bend",
    "meaning": "曲げる",
    "choices": [
      "曲げる",
      "削る",
      "並べる",
      "包む"
    ],
    "sentence": "Do not bend the metal bar by force.",
    "translation": "その金属の棒を無理に曲げないでください。"
  },
  {
    "no": 1241,
    "word": "twist",
    "meaning": "ひねる",
    "choices": [
      "ひねる",
      "割る",
      "伸ばす",
      "押す"
    ],
    "sentence": "When I was running, I twisted my ankle and it really hurts.",
    "translation": "走っていたら足首をひねってしまって，本当に痛いんです。"
  },
  {
    "no": 1242,
    "word": "carve",
    "meaning": "彫る",
    "choices": [
      "彫る",
      "塗る",
      "切る",
      "測る"
    ],
    "sentence": "Two students carved their names into their desks.",
    "translation": "２人の生徒が机に自分の名前を彫った。"
  },
  {
    "no": 1243,
    "word": "maximum",
    "meaning": "最大の",
    "choices": [
      "最大の",
      "最小の",
      "平均の",
      "標準の"
    ],
    "sentence": "This bus can carry a maximum of fifty people.",
    "translation": "このバスは最大で50人を運べます。"
  },
  {
    "no": 1244,
    "word": "importantly",
    "meaning": "重要なことには",
    "choices": [
      "重要なことには",
      "明らかに",
      "おそらく",
      "たまたま"
    ],
    "sentence": "Most importantly, you must have the motivation to succeed.",
    "translation": "最も重要なこととして，成功するためのモチベーションを持たなければならない。"
  },
  {
    "no": 1245,
    "word": "clinic",
    "meaning": "診療所",
    "choices": [
      "診療所",
      "薬局",
      "研究所",
      "保育園"
    ],
    "sentence": "The clinic was so crowded that I had to wait for hours.",
    "translation": "診療所が非常に混んでいたため，何時間も待たなければならなかった。"
  },
  {
    "no": 1246,
    "word": "scan",
    "meaning": "細かく調べる",
    "choices": [
      "細かく調べる",
      "印刷する",
      "並べる",
      "混ぜる"
    ],
    "sentence": "The police scanned the area for any sign of the missing dog.",
    "translation": "警察は行方不明の犬の手がかりがないか、その地域を細かく調べました。"
  },
  {
    "no": 1247,
    "word": "analysis",
    "meaning": "分析",
    "choices": [
      "分析",
      "発明",
      "会話",
      "翻訳"
    ],
    "sentence": "Something is wrong with our analysis.",
    "translation": "私たちの分析には何か間違いがある。"
  },
  {
    "no": 1248,
    "word": "depart",
    "meaning": "出発する",
    "choices": [
      "出発する",
      "到着する",
      "停止する",
      "移動する"
    ],
    "sentence": "Your train departs at 11 o'clock.",
    "translation": "君が乗る列車は11時に出発する。"
  },
  {
    "no": 1249,
    "word": "expedition",
    "meaning": "遠征",
    "choices": [
      "遠征",
      "祝祭",
      "競争",
      "儀式"
    ],
    "sentence": "The researchers set off on the expedition to the Antarctic a month ago.",
    "translation": "その研究者たちは１カ月前に南極の探検に出発した。"
  },
  {
    "no": 1250,
    "word": "voyage",
    "meaning": "航海",
    "choices": [
      "航海",
      "飛行",
      "通勤",
      "散歩"
    ],
    "sentence": "We decided to go on a long sea voyage as a special holiday.",
    "translation": "私たちは特別休暇として長い船旅に出ることにした。"
  },
  {
    "no": 1251,
    "word": "palace",
    "meaning": "宮殿",
    "choices": [
      "宮殿",
      "寺院",
      "庭園",
      "塔"
    ],
    "sentence": "The tourists took lots of pictures of Buckingham Palace.",
    "translation": "その観光客たちはバッキンガム宮殿の写真をたくさん撮った。"
  },
  {
    "no": 1252,
    "word": "primitive",
    "meaning": "原始的な",
    "choices": [
      "原始的な",
      "人工の",
      "近代的な",
      "平和な"
    ],
    "sentence": "The museum now features life in primitive societies.",
    "translation": "その博物館では現在，原始社会の生活をテーマとして展示を行っている。"
  },
  {
    "no": 1253,
    "word": "archaeologist",
    "meaning": "考古学者",
    "choices": [
      "考古学者",
      "建築家",
      "化学者",
      "弁護士"
    ],
    "sentence": "Archaeologists have recently discovered new rooms in the Pyramid of Giza.",
    "translation": "考古学者は最近，ギザのピラミッドで新しい部屋を発見した。"
  },
  {
    "no": 1254,
    "word": "leather",
    "meaning": "革",
    "choices": [
      "革",
      "綿",
      "絹",
      "木材"
    ],
    "sentence": "These gloves are made of soft leather.",
    "translation": "これらの手袋は柔らかい革でできています。"
  },
  {
    "no": 1255,
    "word": "fur",
    "meaning": "毛皮",
    "choices": [
      "毛皮",
      "羽",
      "牙",
      "角"
    ],
    "sentence": "The woman in the fur coat over there is my mother.",
    "translation": "あそこにいる毛皮のコートの女性は私の母です。"
  },
  {
    "no": 1256,
    "word": "instrument",
    "meaning": "器具",
    "choices": [
      "器具",
      "楽器",
      "装飾",
      "部品"
    ],
    "sentence": "This medical instrument is used in eye examinations.",
    "translation": "この器具は目の検査で使われます。"
  },
  {
    "no": 1257,
    "word": "mud",
    "meaning": "泥",
    "choices": [
      "泥",
      "砂",
      "霧",
      "灰"
    ],
    "sentence": "Take your shoes off as they have mud on them.",
    "translation": "泥がついているから靴を脱ぎなさい。"
  },
  {
    "no": 1258,
    "word": "dirt",
    "meaning": "汚れ",
    "choices": [
      "汚れ",
      "香り",
      "影",
      "波"
    ],
    "sentence": "He removed the dirt from the shoes with a brush.",
    "translation": "彼はブラシで靴の汚れを取り除いた。"
  },
  {
    "no": 1259,
    "word": "clay",
    "meaning": "粘土",
    "choices": [
      "粘土",
      "岩",
      "砂利",
      "金属"
    ],
    "sentence": "In class we made our own mugs using clay.",
    "translation": "私たちは，授業で粘土を使って自分のマグカップを作った。"
  },
  {
    "no": 1260,
    "word": "stream",
    "meaning": "小川",
    "choices": [
      "小川",
      "波",
      "港",
      "岸"
    ],
    "sentence": "We sat beside a quiet stream and ate our lunch.",
    "translation": "私たちは静かな小川のそばに座って昼食を食べました。"
  },
  {
    "no": 1261,
    "word": "weave",
    "meaning": "織る",
    "choices": [
      "織る",
      "運ぶ",
      "飾る",
      "集める"
    ],
    "sentence": "I watched a demonstration of traditional silk weaving.",
    "translation": "伝統的な絹織りの実演を見た。"
  },
  {
    "no": 1262,
    "word": "dye",
    "meaning": "染める",
    "choices": [
      "染める",
      "乾かす",
      "切る",
      "磨く"
    ],
    "sentence": "He decided to dye his hair brown when he started college.",
    "translation": "彼は大学に通い始めた時，髪を茶色に染めることを決めた。"
  },
  {
    "no": 1263,
    "word": "currency",
    "meaning": "通貨",
    "choices": [
      "通貨",
      "値段",
      "税金",
      "景気"
    ],
    "sentence": "I need to change my money into the local currency.",
    "translation": "私は自分のお金を現地通貨に両替する必要がある。"
  },
  {
    "no": 1264,
    "word": "contemporary",
    "meaning": "現代の",
    "choices": [
      "現代の",
      "古代の",
      "地方の",
      "個人的な"
    ],
    "sentence": "I am not that fond of contemporary music.",
    "translation": "私は現代音楽がそれほど好きではない。"
  },
  {
    "no": 1265,
    "word": "escape",
    "meaning": "逃げる",
    "choices": [
      "逃げる",
      "追う",
      "隠す",
      "渡る"
    ],
    "sentence": "I wanted to escape from the city for a few days.",
    "translation": "私は数日間都会から離れたかった。"
  },
  {
    "no": 1266,
    "word": "refugee",
    "meaning": "難民",
    "choices": [
      "難民",
      "移民",
      "観光客",
      "警備員"
    ],
    "sentence": "A boat carrying 50 refugees sank and only a few survived.",
    "translation": "50人の難民を乗せたボートが沈没し，数人だけが生き残った。"
  },
  {
    "no": 1267,
    "word": "inspect",
    "meaning": "検査する",
    "choices": [
      "検査する",
      "修理する",
      "宣伝する",
      "整理する"
    ],
    "sentence": "We carefully inspect all our goods before we ship them to our customers.",
    "translation": "私たちは商品を顧客に発送する前に，すべての商品を注意深く検査する。"
  },
  {
    "no": 1268,
    "word": "cycle",
    "meaning": "周期",
    "choices": [
      "周期",
      "速度",
      "方向",
      "温度"
    ],
    "sentence": "Many animals follow a daily cycle of sleep and activity.",
    "translation": "多くの動物は睡眠と活動の一日の周期に従っています。"
  },
  {
    "no": 1269,
    "word": "circle",
    "meaning": "円",
    "choices": [
      "円",
      "線",
      "面",
      "角"
    ],
    "sentence": "The children all stood in a circle.",
    "translation": "子供たちはみんな輪になって立った。"
  },
  {
    "no": 1270,
    "word": "circulation",
    "meaning": "循環",
    "choices": [
      "循環",
      "拡大",
      "回転",
      "密集"
    ],
    "sentence": "Poor blood circulation can cause many diseases.",
    "translation": "血液の循環が悪いと多くの病気を引き起こす可能性がある。"
  },
  {
    "no": 1271,
    "word": "pile",
    "meaning": "積み重ね",
    "choices": [
      "積み重ね",
      "列",
      "束",
      "容器"
    ],
    "sentence": "I finally washed the huge pile of dirty clothes in my room.",
    "translation": "私は自分の部屋にあった大量の汚れた服の山をようやく洗濯した。"
  },
  {
    "no": 1272,
    "word": "fairly",
    "meaning": "かなり",
    "choices": [
      "かなり",
      "普段は",
      "完全に",
      "一時的に"
    ],
    "sentence": "It is fairly common for trains to be late in the UK.",
    "translation": "イギリスでは電車が遅れるのはかなり一般的なことだ。"
  },
  {
    "no": 1273,
    "word": "resolve",
    "meaning": "解決する",
    "choices": [
      "解決する",
      "予想する",
      "延期する",
      "比較する"
    ],
    "sentence": "The couple couldn't resolve their differences and decided to break up.",
    "translation": "そのカップルは相違点を解決できず，別れることにした。"
  },
  {
    "no": 1274,
    "word": "steadily",
    "meaning": "着実に",
    "choices": [
      "着実に",
      "突然",
      "たまたま",
      "別々に"
    ],
    "sentence": "Sales have increased steadily since last spring.",
    "translation": "売り上げは昨年の春から着実に伸びています。"
  },
  {
    "no": 1275,
    "word": "length",
    "meaning": "長さ",
    "choices": [
      "長さ",
      "幅",
      "重さ",
      "量"
    ],
    "sentence": "Keep the length of your presentation to no more than 30 minutes.",
    "translation": "発表の長さは30分までにしてください。"
  },
  {
    "no": 1276,
    "word": "sail",
    "meaning": "航行する",
    "choices": [
      "航行する",
      "着陸する",
      "乗車する",
      "停泊する"
    ],
    "sentence": "The ship sails for the United States.",
    "translation": "その船はアメリカ合衆国に向けて航行する。"
  },
  {
    "no": 1277,
    "word": "navigate",
    "meaning": "航行する",
    "choices": [
      "航行する",
      "潜水する",
      "回転する",
      "移住する"
    ],
    "sentence": "In the past, sailors navigated by the stars.",
    "translation": "昔は船乗りは星を見て航行していた。"
  },
  {
    "no": 1278,
    "word": "journey",
    "meaning": "旅行",
    "choices": [
      "旅行",
      "目的地",
      "乗客",
      "道路"
    ],
    "sentence": "Their journey across Hokkaido took three days.",
    "translation": "彼らの北海道横断の旅行には3日かかりました。"
  },
  {
    "no": 1279,
    "word": "commute",
    "meaning": "通勤する",
    "choices": [
      "通勤する",
      "移住する",
      "出張する",
      "集合する"
    ],
    "sentence": "I have to commute to the office every day.",
    "translation": "私は毎日オフィスに通勤しなければならない。"
  },
  {
    "no": 1280,
    "word": "luggage",
    "meaning": "手荷物",
    "choices": [
      "手荷物",
      "旅券",
      "座席",
      "運賃"
    ],
    "sentence": "I lost my luggage on the flight.",
    "translation": "飛行機で荷物を紛失した。"
  },
  {
    "no": 1281,
    "word": "arise",
    "meaning": "生じる",
    "choices": [
      "生じる",
      "続く",
      "消える",
      "減る"
    ],
    "sentence": "Various health risks arise from an unhealthy diet.",
    "translation": "さまざまな健康リスクは不健康な食事に起因する。"
  },
  {
    "no": 1282,
    "word": "migration",
    "meaning": "移住",
    "choices": [
      "移住",
      "輸出",
      "定住",
      "発見"
    ],
    "sentence": "There has been a large migration of people to the city.",
    "translation": "都市への人の大移動があった。"
  },
  {
    "no": 1283,
    "word": "immigration",
    "meaning": "移住",
    "choices": [
      "移住",
      "観光",
      "入国審査",
      "留学"
    ],
    "sentence": "One way to solve the shortage of workers is to allow immigration.",
    "translation": "労働者不足を解決する一つの方法は他国からの移住を受け入れることだ。"
  },
  {
    "no": 1284,
    "word": "inhabit",
    "meaning": "住む",
    "choices": [
      "住む",
      "訪れる",
      "守る",
      "離れる"
    ],
    "sentence": "Humans inhabit nearly every corner of the earth.",
    "translation": "人間は地球のほぼ全域をすみかとしている。"
  },
  {
    "no": 1285,
    "word": "habitat",
    "meaning": "生息地",
    "choices": [
      "生息地",
      "巣",
      "群れ",
      "農地"
    ],
    "sentence": "The jungle is the natural habitat for thousands of different animals.",
    "translation": "ジャングルは何千種類もの動物にとって自然の生息地である。"
  },
  {
    "no": 1286,
    "word": "duty",
    "meaning": "義務",
    "choices": [
      "義務",
      "権利",
      "名誉",
      "機会"
    ],
    "sentence": "One of the duties of my job is to clean the tables.",
    "translation": "私の職務の１つはテーブルをきれいにすることだ。"
  },
  {
    "no": 1287,
    "word": "compel",
    "meaning": "強いる",
    "choices": [
      "強いる",
      "許す",
      "慰める",
      "誘う"
    ],
    "sentence": "The scandal compelled him to resign.",
    "translation": "そのスキャンダルにより，彼は辞任することを余儀なくされた。"
  },
  {
    "no": 1288,
    "word": "steam",
    "meaning": "蒸気",
    "choices": [
      "蒸気",
      "煙",
      "湯",
      "霜"
    ],
    "sentence": "The coffee was so hot that steam was rising from it.",
    "translation": "コーヒーはとても熱かったので，湯気が立ち上っていた。"
  },
  {
    "no": 1289,
    "word": "bubble",
    "meaning": "泡",
    "choices": [
      "泡",
      "粒",
      "雲",
      "しずく"
    ],
    "sentence": "Force out any air bubbles when applying the film to the screen.",
    "translation": "画面にフィルムを貼る際には気泡を外に押し出してください。"
  },
  {
    "no": 1290,
    "word": "breathe",
    "meaning": "呼吸する",
    "choices": [
      "呼吸する",
      "ささやく",
      "叫ぶ",
      "歩く"
    ],
    "sentence": "I like going to the mountains and breathing the fresh air.",
    "translation": "私は山に行って新鮮な空気を吸うのが好きだ。"
  },
  {
    "no": 1291,
    "word": "cross",
    "meaning": "横切る",
    "choices": [
      "横切る",
      "進入する",
      "追い越す",
      "回る"
    ],
    "sentence": "I crossed the street to get to the bank on the other side.",
    "translation": "私は向こう側の銀行に行くために通りを横切った。"
  },
  {
    "no": 1292,
    "word": "destination",
    "meaning": "目的地",
    "choices": [
      "目的地",
      "経由地",
      "方角",
      "時刻表"
    ],
    "sentence": "We will reach our final destination at 3 o'clock.",
    "translation": "私たちは最終目的地に3時に着く。"
  },
  {
    "no": 1293,
    "word": "lay",
    "meaning": "置く",
    "choices": [
      "置く",
      "運ぶ",
      "落とす",
      "借りる"
    ],
    "sentence": "Please lay your bag on the chair.",
    "translation": "かばんを椅子の上に置いてください。"
  },
  {
    "no": 1294,
    "word": "layer",
    "meaning": "層",
    "choices": [
      "層",
      "枠",
      "表面",
      "底"
    ],
    "sentence": "He put a layer of sugar on top of the cake.",
    "translation": "彼はそのケーキの上に砂糖の層を加えた。"
  },
  {
    "no": 1295,
    "word": "layout",
    "meaning": "配置",
    "choices": [
      "配置",
      "素材",
      "模様",
      "余白"
    ],
    "sentence": "The map shows the layout of the amusement park.",
    "translation": "その地図は遊園地のレイアウトを示している。"
  },
  {
    "no": 1296,
    "word": "dispose",
    "meaning": "処分する",
    "choices": [
      "処分する",
      "収集する",
      "分解する",
      "交換する"
    ],
    "sentence": "We dispose of plastic waste on Mondays and burnable waste on Wednesdays.",
    "translation": "私たちはプラスチックゴミは月曜日に，可燃ゴミは水曜日に処分する。"
  },
  {
    "no": 1297,
    "word": "scent",
    "meaning": "香り",
    "choices": [
      "香り",
      "煙",
      "味",
      "気配"
    ],
    "sentence": "The scent of the roses was really beautiful.",
    "translation": "そのバラの香りは本当に素晴らしかった。"
  },
  {
    "no": 1298,
    "word": "shortly",
    "meaning": "まもなく",
    "choices": [
      "まもなく",
      "突然",
      "以前に",
      "しばしば"
    ],
    "sentence": "My father started a new business shortly after I graduated from college.",
    "translation": "私が大学を卒業してまもなく，父は新しい事業を始めた。"
  },
  {
    "no": 1299,
    "word": "immediate",
    "meaning": "即座の",
    "choices": [
      "即座の",
      "一時的な",
      "最終的な",
      "個人的な"
    ],
    "sentence": "This injury needs the immediate attention of a doctor.",
    "translation": "このけがは緊急の医師の手当てが必要だ。"
  },
  {
    "no": 1300,
    "word": "transport",
    "meaning": "輸送する",
    "choices": [
      "輸送する",
      "保存する",
      "包装する",
      "販売する"
    ],
    "sentence": "We will transport your goods to you at the end of this week.",
    "translation": "今週末に商品をお届けします。"
  }
];
