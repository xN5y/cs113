window.EXAMS = [
  {
    "id": "exam1",
    "title": "النموذج ١ · قائمة الوسائط",
    "subtitle": "Playable → Media → Song / Podcast → Playlist",
    "duration": 110,
    "source": "447 S2 1st version.pdf",
    "pdf": "assets/exams/exam1.pdf",
    "originalMainClass": null,
    "overview": "تبني قائمة تشغيل تضم أغاني وبودكاست. هذا هو القالب الأساسي الذي ستنقل فكرته إلى بقية النماذج. نسخة الاختبار المتاحة في الموقع 3 صفحات فقط: تظهر مواصفات التنفيذ (8 درجات)، ولا توجد فيه صفحة main أو sample run. لذلك برنامج Main ومخرجاته أدناه تدريب إضافي من إعداد الموقع، وليسا نص سؤال مفقود. الزمن الأصلي: ساعة و50 دقيقة. المجموع المعلن: 10 درجات. تمنع الورقة استخدام Java Collections والمكتبات الخارجية؛ استخدم مصفوفة عادية. في الاختبار: اكتب الاسم والرقم الجامعي تعليقًا أعلى كل ملف، وافتح workspace جديدًا وسلّم كل ملفات .java. هذه شروط الورقة للمحاكاة وليست أوامر للموقع.",
    "sourceNotes": [
      "الملف يحتوي 3 صفحات فقط؛ صفحة main/sample run غير مرفقة. لا نفترض نصها أو بياناتها.",
      "الدرجة المعلنة 10، لكن مجموع الأجزاء الظاهرة 8؛ لا نوزّع درجتين مفقودتين افتراضيًا.",
      "تُقرأ مدة Podcast الرقمية كما في الملف: duration × 0.02. في أمثلة التنسيق الورقة تعرض 42.30، وتمثيل double الافتراضي في Java قد يظهر 42.3؛ الحل ينسق دقائق العرض إلى منزلتين."
    ],
    "mainNote": "Main هنا اختبار إضافي من إعداد الموقع؛ لا توجد صفحة main أصلية في النسخة المتاحة في الموقع.",
    "expectedBehavior": "يرفض size <= 0؛ يمنع الوسائط المتساوية في العنوان والفنان؛ يشغل كل عنصر باستدعاء play الخاص بنوعه؛ يحذف بالتبديل مع آخر عنصر؛ يعيد الأطول recursively أو null إذا كانت القائمة فارغة.",
    "difficulty": "البداية",
    "tasks": [
      {
        "title": "١. الواجهة Playable",
        "body": "دالتان abstract وpublic ضمنيًا: <pre dir=\"ltr\" class=\"language-java\">void play();\ndouble getDuration();</pre>play تشغّل العنصر بالطباعة، وgetDuration ترجع المدة بالدقائق.",
        "points": 0.5
      },
      {
        "title": "٢. الصنف المجرد Media",
        "body": "يطبق Playable. الخصائص protected: <pre dir=\"ltr\" class=\"language-java\">String title;\nString artist;\ndouble duration;</pre>الباني <code dir=\"ltr\">Media(title, artist, duration)</code> يخزن القيم. <code dir=\"ltr\">getDuration()</code> ترجع duration. <code dir=\"ltr\">calculateRoyalty()</code> مجردة وترجع double. <code dir=\"ltr\">equals(Media other)</code> ترجع true عند تطابق title وartist باستخدام String.equals. لا تنفّذ play في الأب. toString ترجع الصيغة:<pre dir=\"ltr\">&lt;title&gt; - &lt;artist&gt; (&lt;duration&gt; min)\nImagine - Lennon (3.03 min)</pre>",
        "points": 1.5
      },
      {
        "title": "٣. Song extends Media",
        "body": "الخصائص private: genre من نوع String وexplicit من نوع boolean. الباني يأخذ title, artist, duration, genre, explicit ويستدعي super. play تطبع:<pre dir=\"ltr\">Now playing song: &lt;title&gt; - &lt;artist&gt; [&lt;genre&gt;]</pre>calculateRoyalty ترجع <code dir=\"ltr\">duration * 0.10</code> إذا explicit تساوي true، وإلا <code dir=\"ltr\">duration * 0.05</code>. toString:<pre dir=\"ltr\">Song: &lt;title&gt; - &lt;artist&gt; [&lt;genre&gt;] (&lt;duration&gt; min)</pre>",
        "points": 1.25
      },
      {
        "title": "٤. Podcast extends Media",
        "body": "الخصائص private: showName من نوع String وepisode من نوع int. الباني يأخذ title, artist, duration, showName, episode. play تطبع:<pre dir=\"ltr\">Streaming podcast: &lt;title&gt; -- &lt;showName&gt; Ep#&lt;episode&gt;\nStreaming podcast: Tech -- TED Ep#12</pre>calculateRoyalty ترجع <code dir=\"ltr\">duration * 0.02</code>. toString:<pre dir=\"ltr\">Podcast: &lt;title&gt; - &lt;artist&gt; | &lt;showName&gt; Ep#&lt;episode&gt; (&lt;duration&gt; min)\nPodcast: Tech - Doe | TED Ep#12 (42.30 min)</pre>",
        "points": 1
      },
      {
        "title": "٥. Playlist: المصفوفة والإضافة والحذف والبحث",
        "body": "خصائص private: name:String وitems:Playable[] وcount:int. الباني Playlist(name,size) يرفض size <= 0 بالنص التالي:<pre dir=\"ltr\" class=\"language-java\">throw new IllegalArgumentException(&quot;Invalid size: &quot; + size);</pre>add(Playable p) تضيف في أول خانة متاحة إذا توجد مساحة والعنصر غير موجود حسب equals؛ ترجع true عند النجاح وإلا false. remove(Playable p) تبحث عنه، تستبدله بآخر عنصر ثم تنقص count؛ لا يشترط حفظ ترتيب البقية. getAt(int i) تعيد العنصر أو null خارج المجال. playAll تستدعي play لكل عنصر. getLongest تعيد recursively العنصر الأطول أو null إذا فارغة؛ تنفيذها بحلقة فقط يأخذ صفرًا على هذا البند. toString:<pre dir=\"ltr\">&lt;name&gt; Playlist (&lt;count&gt;):\nitem1\nitem2\n...</pre>",
        "points": 3.75
      },
      {
        "title": "٦. تدريب main إضافي",
        "body": "هذا التمرين من إعداد الموقع لأن الصفحة الأصلية غير مرفقة: جرّب size=0 داخل try/catch، ثم قائمة Study بسعة 3 تحتوي Song Imagine/Lennon/3.03/Pop/false وPodcast Tech/Doe/42.30/TED/12 وSong Focus/Artist/5.0/Ambient/true. اطبع القائمة، شغّلها، واطبع الأطول. اختبر منع التكرار والحذف وخروج getAt عن المجال بنفسك."
      }
    ],
    "uml": "<div class=\"uml-diagram\" dir=\"ltr\" role=\"group\" aria-label=\"مواصفات كلاسات UML\"><section class=\"uml-card\"><h3>interface Playable</h3><pre class=\"uml-members\" dir=\"ltr\">+ play(): void\n+ getDuration(): double</pre></section><section class=\"uml-card\"><h3>abstract Media</h3><pre class=\"uml-members\" dir=\"ltr\"># title: String\n# artist: String\n# duration: double\n+ Media(title, artist, duration)\n+ getDuration(): double\n+ calculateRoyalty(): double {abstract}\n+ equals(other: Media): boolean\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>Song</h3><pre class=\"uml-members\" dir=\"ltr\">- genre: String\n- explicit: boolean\n+ Song(title,artist,duration,genre,explicit)\n+ play(): void\n+ calculateRoyalty(): double\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>Podcast</h3><pre class=\"uml-members\" dir=\"ltr\">- showName: String\n- episode: int\n+ Podcast(title,artist,duration,showName,episode)\n+ play(): void\n+ calculateRoyalty(): double\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>Playlist</h3><pre class=\"uml-members\" dir=\"ltr\">- name: String\n- items: Playable[]\n- count: int\n+ Playlist(name,size)\n+ add(p: Playable): boolean\n+ remove(p: Playable): boolean\n+ getAt(i: int): Playable\n+ playAll(): void\n+ getLongest(): Playable {recursive}\n+ toString(): String</pre></section></div><p>قراءة العلاقات: <code dir=\"ltr\">Media</code> implements <code dir=\"ltr\">Playable</code>؛ الصنفان الابنان extends الصنف الأب. صنف الحاوية يحتفظ بمصفوفة من نوع الواجهة (علاقة has-a). الرموز: + public، - private، # protected.</p>",
    "hints": [
      "ابدأ بالواجهة ثم Media، واختبر Song واحدًا قبل كتابة Playlist. استخدم super لحفظ الخصائص المشتركة.",
      "خزّن العناصر في المجال 0 إلى count-1. عند الحذف انسخ items[count-1] مكان العنصر، امسح الخانة الأخيرة بـ null ثم count--.",
      "اجعل getLongest تعيد null إن count==0، وإلا تنادي helper(int i). شرط النهاية i==count-1؛ قارن items[i] بنتيجة helper(i+1) وأعد الأطول."
    ],
    "rubric": [
      {
        "label": "Playable",
        "points": 0.5
      },
      {
        "label": "Media",
        "points": 1.5
      },
      {
        "label": "Song",
        "points": 1.25
      },
      {
        "label": "Podcast",
        "points": 1
      },
      {
        "label": "Playlist بما فيها البحث recursive",
        "points": 3.75
      }
    ],
    "rubricNote": "هذه 8 درجات ظاهرة فقط في الملف. لا تمثّل تقديرًا رسميًا من 10.",
    "starter": "// اكتب الحل كاملًا. للويب استخدم Main؛ وفي Eclipse اتبع أسماء ملفات الورقة.\npublic class Main {\n    public static void main(String[] args) {\n        // اختبر برنامجك هنا\n    }\n}\n\n// اكتب interface Playable هنا\n\n// اكتب abstract class Media هنا\n\n// اكتب class Song هنا\n\n// اكتب class Podcast هنا\n\n// اكتب class Playlist هنا\n",
    "selfChecks": [
      "إضافة الوسيط نفسه بالقيم، حتى لو كان كائنًا جديدًا، ترجع false.",
      "إضافة عنصر رابع لقائمة سعتها 3 ترجع false.",
      "عند حذف أول عنصر من [A,B,C] تصبح العناصر [C,B].",
      "getLongest لقائمة فارغة يرجع null ولعنصر واحد يرجع العنصر نفسه.",
      "Royalty: أغنية explicit مدتها 5 تعطي 0.5؛ غير explicit تعطي 0.25؛ بودكاست مدته 5 يعطي 0.1."
    ],
    "traps": [
      "count هو عدد العناصر الفعلية؛ items.length هي السعة. الدوران حتى السعة قد يصادف null.",
      "الدالة toString ترجع String؛ لا تطبع داخليًا. دوال التنفيذ مثل play/borrow/turnOn/order تطبع.",
      "equals في الورقة تستقبل الصنف الأب؛ هذه overload مقارنة بـ Object.equals. استدعاؤها من مرجع الواجهة يحتاج تحويلًا للصنف الأب، وإلا قد تحصل مقارنة مراجع بدل مقارنة القيم.",
      "getAt يقبل فقط 0 <= i < count؛ أي قيمة غير ذلك ترجع null.",
      "بحث أكبر/أصغر عنصر يجب أن يكون recursive فعليًا، مع شرط توقف؛ استخدام حلقة وحدها لا يحقق شرط الورقة.",
      "الأمثلة في main لهذا النموذج تدريبية وليست من صفحة أصلية مفقودة.",
      "Podcast.play تستخدم شرطتين --، بينما Song.play وtoString تستخدم شرطة واحدة."
    ],
    "solution": "// Practice Main created for this site; the attached PDF has no main page.\npublic class Main {\n    public static void main(String[] args) {\n        try { new Playlist(\"Invalid\", 0); }\n        catch (IllegalArgumentException e) { System.out.println(e.getMessage()); }\n        Playlist list = new Playlist(\"Study\", 3);\n        list.add(new Song(\"Imagine\", \"Lennon\", 3.03, \"Pop\", false));\n        list.add(new Podcast(\"Tech\", \"Doe\", 42.30, \"TED\", 12));\n        list.add(new Song(\"Focus\", \"Artist\", 5.0, \"Ambient\", true));\n        System.out.print(list);\n        list.playAll();\n        System.out.println(\"Longest: \" + list.getLongest());\n    }\n}\ninterface Playable {\n    void play();\n    double getDuration();\n}\nabstract class Media implements Playable {\n    protected String title;\n    protected String artist;\n    protected double duration;\n    public Media(String title, String artist, double duration) {\n        this.title = title; this.artist = artist; this.duration = duration;\n    }\n    public double getDuration() { return duration; }\n    public abstract double calculateRoyalty();\n    public boolean equals(Media other) {\n        return other != null && title.equals(other.title) && artist.equals(other.artist);\n    }\n    public String toString() {\n        return title + \" - \" + artist + \" (\" + String.format(java.util.Locale.US, \"%.2f\", duration) + \" min)\";\n    }\n}\nclass Song extends Media {\n    private String genre;\n    private boolean explicit;\n    public Song(String title, String artist, double duration, String genre, boolean explicit) {\n        super(title, artist, duration); this.genre = genre; this.explicit = explicit;\n    }\n    public void play() { System.out.println(\"Now playing song: \" + title + \" - \" + artist + \" [\" + genre + \"]\"); }\n    public double calculateRoyalty() { return duration * (explicit ? 0.10 : 0.05); }\n    public String toString() {\n        return \"Song: \" + title + \" - \" + artist + \" [\" + genre + \"] (\" + String.format(java.util.Locale.US, \"%.2f\", duration) + \" min)\";\n    }\n}\nclass Podcast extends Media {\n    private String showName;\n    private int episode;\n    public Podcast(String title, String artist, double duration, String showName, int episode) {\n        super(title, artist, duration); this.showName = showName; this.episode = episode;\n    }\n    public void play() { System.out.println(\"Streaming podcast: \" + title + \" -- \" + showName + \" Ep#\" + episode); }\n    public double calculateRoyalty() { return duration * 0.02; }\n    public String toString() {\n        return \"Podcast: \" + title + \" - \" + artist + \" | \" + showName + \" Ep#\" + episode + \" (\" + String.format(java.util.Locale.US, \"%.2f\", duration) + \" min)\";\n    }\n}\nclass Playlist {\n    private String name;\n    private Playable[] items;\n    private int count;\n    public Playlist(String name, int size) {\n        if (size <= 0) throw new IllegalArgumentException(\"Invalid size: \" + size);\n        this.name = name; items = new Playable[size]; count = 0;\n    }\n    private boolean same(Playable a, Playable b) {\n        if (a instanceof Media && b instanceof Media) return ((Media) a).equals((Media) b);\n        return a.equals(b);\n    }\n    public boolean add(Playable p) {\n        if (p == null || count == items.length) return false;\n        for (int i = 0; i < count; i++) if (same(items[i], p)) return false;\n        items[count++] = p; return true;\n    }\n    public boolean remove(Playable p) {\n        for (int i = 0; i < count; i++) {\n            if (same(items[i], p)) {\n                items[i] = items[count - 1]; items[count - 1] = null; count--; return true;\n            }\n        }\n        return false;\n    }\n    public Playable getAt(int i) { return i >= 0 && i < count ? items[i] : null; }\n    public void playAll() { for (int i = 0; i < count; i++) items[i].play(); }\n    public Playable getLongest() { return count == 0 ? null : longestFrom(0); }\n    private Playable longestFrom(int i) {\n        if (i == count - 1) return items[i];\n        Playable rest = longestFrom(i + 1);\n        return items[i].getDuration() >= rest.getDuration() ? items[i] : rest;\n    }\n    public String toString() {\n        String result = name + \" Playlist (\" + count + \"):\\n\";\n        for (int i = 0; i < count; i++) result += items[i] + \"\\n\";\n        return result;\n    }\n}\n",
    "tests": [
      {
        "name": "تشغيل المثال التدريبي المضاف للموقع",
        "stdin": "",
        "expectedContains": [
          "Invalid size: 0",
          "Study Playlist (3):",
          "Now playing song: Imagine - Lennon [Pop]",
          "Streaming podcast: Tech -- TED Ep#12",
          "Longest: Podcast: Tech - Doe | TED Ep#12 (42.30 min)"
        ]
      }
    ],
    "pageMap": "PDF ص1: التعليمات وUML. ص2: Playable وMedia وSong وبداية Podcast. ص3: بقية Podcast وPlaylist. لا صفحة main.",
    "testNotice": "فحص المخرجات يساعدك على مطابقة المثال فقط؛ لا يثبت صحة الحذف أو recursion أو كل الحالات. أكمل قائمة الفحص الذاتي وراجع rubric."
  },
  {
    "id": "exam2",
    "title": "النموذج ٢ · المكتبة",
    "subtitle": "Borrowable → LibraryItem → Book / Magazine → Library",
    "duration": 110,
    "source": "447 S2 2nd version.pdf",
    "pdf": "assets/exams/exam2.pdf",
    "originalMainClass": "LibraryTest",
    "overview": "نفس هيكل النموذج الأول داخل مكتبة، لكن انتبه: الحذف يحافظ على ترتيب العناصر بتحريكها لليسار. أربع صفحات كاملة تشمل LibraryTest والمخرجات. الزمن الأصلي: ساعة و50 دقيقة. المجموع المعلن: 10 درجات. تمنع الورقة استخدام Java Collections والمكتبات الخارجية؛ استخدم مصفوفة عادية. في الاختبار: اكتب الاسم والرقم الجامعي تعليقًا أعلى كل ملف، وافتح workspace جديدًا وسلّم كل ملفات .java. هذه شروط الورقة للمحاكاة وليست أوامر للموقع.",
    "sourceNotes": [
      "تعني dueDays هنا عدد أيام التأخير كما يوضح نص الواجهة، رغم الاسم الذي قد يوحي بموعد الاستحقاق.",
      "قيمة Book(\"Java\", \"Eckel\", 14, 1000, true) مأخوذة من الورقة؛ النتائج تستخدم Eckel."
    ],
    "mainNote": "في الورقة اسم صنف التشغيل LibraryTest. محرر الموقع يستخدم Main؛ في Eclipse سمّه LibraryTest واسم الملف LibraryTest.java.",
    "expectedBehavior": "المكتبة Central بسعة 4 تعرض عنصرين Book وعنصرين Magazine، تستدعي borrowAll بطباعة مناسبة لكل نوع، وتجد كتاب Java بوصفه الأكثر تأخيرًا (14 يومًا). الحذف يحافظ على الترتيب.",
    "difficulty": "نقل الفكرة",
    "tasks": [
      {
        "title": "١. الواجهة Borrowable",
        "body": "الدالتان:<pre dir=\"ltr\" class=\"language-java\">void borrow();\nint getDueDays();</pre>borrow تطبع استعارة العنصر، وgetDueDays تعيد عدد أيام تأخره.",
        "points": 0.5
      },
      {
        "title": "٢. الصنف المجرد LibraryItem",
        "body": "يطبق Borrowable. الخصائص protected: title:String وauthor:String وdueDays:int. الباني LibraryItem(title,author,dueDays) يخزن القيم. getDueDays تعيد dueDays؛ calculateLateFee مجردة وترجع double. equals(LibraryItem other) تقارن العنوان والمؤلف. لا تنفذ borrow هنا. toString:<pre dir=\"ltr\">&lt;title&gt; by &lt;author&gt; (&lt;dueDays&gt; days)\nGatsby by Scott (7 days)</pre>",
        "points": 1.5
      },
      {
        "title": "٣. Book extends LibraryItem",
        "body": "خصائص private: pages:int وhardcover:boolean. الباني Book(title,author,dueDays,pages,hardcover). borrow تطبع:<pre dir=\"ltr\">Borrowed book: &lt;title&gt; by &lt;author&gt; (&lt;pages&gt; pages)</pre>calculateLateFee ترجع dueDays * 1.50 للغلاف المقوى، وإلا dueDays * 0.50. toString:<pre dir=\"ltr\">Book: &lt;title&gt; by &lt;author&gt; [&lt;pages&gt; pages] (&lt;dueDays&gt; days)</pre>",
        "points": 1.25
      },
      {
        "title": "٤. Magazine extends LibraryItem",
        "body": "خصائص private: issue:int وmonthly:boolean. الباني Magazine(title,author,dueDays,issue,monthly). borrow تطبع:<pre dir=\"ltr\">Borrowed magazine: &lt;title&gt; Issue #&lt;issue&gt;</pre>calculateLateFee ترجع dueDays * 0.20، ولا تتغير حسب monthly في مواصفات هذه الورقة. toString:<pre dir=\"ltr\">Magazine: &lt;title&gt; Issue #&lt;issue&gt; (&lt;dueDays&gt; days)</pre>",
        "points": 1
      },
      {
        "title": "٥. Library والحذف المرتب",
        "body": "خصائص private: name:String وitems:Borrowable[] وcount:int. Library(name,size) يرمي IllegalArgumentException(\"Invalid size: \" + size) إذا size <= 0. add تمنع التكرار بحسب equals والامتلاء. remove تبحث ثم <strong>تحرّك جميع العناصر التالية خطوة لليسار</strong> للحفاظ على الترتيب: [A,B,C,D] بعد حذف B تصبح [A,C,D]. getAt تعيد العنصر أو null. borrowAll تستدعي borrow لكل عنصر. getMostOverdue تعيد recursively صاحب أعلى dueDays أو null. toString:<pre dir=\"ltr\">&lt;name&gt; Library (&lt;count&gt;):\nitem1\nitem2\n...</pre>",
        "points": 3.75
      },
      {
        "title": "٦. LibraryTest / main",
        "body": "جرّب مكتبة بحجم 0 داخل try/catch واطبع رسالة الاستثناء. ثم أنشئ Central بسعة 4 وأضف بالترتيب:<pre dir=\"ltr\" class=\"language-java\">new Book(&quot;Gatsby&quot;, &quot;Scott&quot;, 7, 180, false)\nnew Book(&quot;Java&quot;, &quot;Eckel&quot;, 14, 1000, true)\nnew Magazine(&quot;NatGeo&quot;, &quot;NGS&quot;, 3, 247, true)\nnew Magazine(&quot;Time&quot;, &quot;TI&quot;, 5, 1850, false)</pre>اطبع المكتبة، استدعِ borrowAll، ثم اطبع العنصر الأكثر تأخيرًا باستخدام getMostOverdue.",
        "points": 2
      }
    ],
    "uml": "<div class=\"uml-diagram\" dir=\"ltr\" role=\"group\" aria-label=\"مواصفات كلاسات UML\"><section class=\"uml-card\"><h3>interface Borrowable</h3><pre class=\"uml-members\" dir=\"ltr\">+ borrow(): void\n+ getDueDays(): int</pre></section><section class=\"uml-card\"><h3>abstract LibraryItem</h3><pre class=\"uml-members\" dir=\"ltr\"># title: String\n# author: String\n# dueDays: int\n+ LibraryItem(title,author,dueDays)\n+ getDueDays(): int\n+ calculateLateFee(): double {abstract}\n+ equals(other: LibraryItem): boolean\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>Book</h3><pre class=\"uml-members\" dir=\"ltr\">- pages: int\n- hardcover: boolean\n+ Book(title,author,dueDays,pages,hardcover)\n+ borrow(): void\n+ calculateLateFee(): double\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>Magazine</h3><pre class=\"uml-members\" dir=\"ltr\">- issue: int\n- monthly: boolean\n+ Magazine(title,author,dueDays,issue,monthly)\n+ borrow(): void\n+ calculateLateFee(): double\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>Library</h3><pre class=\"uml-members\" dir=\"ltr\">- name: String\n- items: Borrowable[]\n- count: int\n+ Library(name,size)\n+ add(b: Borrowable): boolean\n+ remove(b: Borrowable): boolean\n+ getAt(i: int): Borrowable\n+ borrowAll(): void\n+ getMostOverdue(): Borrowable {recursive}\n+ toString(): String</pre></section></div><p>قراءة العلاقات: <code dir=\"ltr\">LibraryItem</code> implements <code dir=\"ltr\">Borrowable</code>؛ الصنفان الابنان extends الصنف الأب. صنف الحاوية يحتفظ بمصفوفة من نوع الواجهة (علاقة has-a). الرموز: + public، - private، # protected.</p>",
    "hints": [
      "استبدل أسماء قالب Playlist بالأسماء الجديدة، ثم راجع الفرق السلوكي في remove. لا تنس اختلاف نوع dueDays: int.",
      "بعد العثور على i: for (int j=i; j<count-1; j++) items[j]=items[j+1]; ثم امسح آخر خانة وأنقص count.",
      "في recursion أعد العنصر نفسه، لا عدد الأيام: Borrowable rest = mostOverdueFrom(i+1); ثم قارن getDueDays وأعد أحد المرجعين."
    ],
    "rubric": [
      {
        "label": "Borrowable",
        "points": 0.5
      },
      {
        "label": "LibraryItem",
        "points": 1.5
      },
      {
        "label": "Book",
        "points": 1.25
      },
      {
        "label": "Magazine",
        "points": 1
      },
      {
        "label": "Library",
        "points": 3.75
      },
      {
        "label": "LibraryTest",
        "points": 2
      }
    ],
    "starter": "// اكتب الحل كاملًا. للويب استخدم Main؛ وفي Eclipse اتبع أسماء ملفات الورقة.\npublic class Main {\n    public static void main(String[] args) {\n        // اختبر برنامجك هنا\n    }\n}\n\n// اكتب interface Borrowable هنا\n\n// اكتب abstract class LibraryItem هنا\n\n// اكتب class Book هنا\n\n// اكتب class Magazine هنا\n\n// اكتب class Library هنا\n",
    "selfChecks": [
      "بعد حذف العنصر الثاني من [A,B,C,D] يجب أن يكون getAt(1) هو C وgetAt(2) هو D.",
      "كائنان لهما title وauthor نفسيهما مكرران، حتى إذا اختلفت pages أو dueDays.",
      "اختبر getMostOverdue على 0 و1 و4 عناصر، وعلى قائمة لا يكون الأكبر فيها العنصر الأخير.",
      "غرامة Gatsby هي 3.5، وغرامة Java هي 21.0، وغرامة NatGeo هي 0.6 تقريبًا بسبب double."
    ],
    "traps": [
      "count هو عدد العناصر الفعلية؛ items.length هي السعة. الدوران حتى السعة قد يصادف null.",
      "الدالة toString ترجع String؛ لا تطبع داخليًا. دوال التنفيذ مثل play/borrow/turnOn/order تطبع.",
      "equals في الورقة تستقبل الصنف الأب؛ هذه overload مقارنة بـ Object.equals. استدعاؤها من مرجع الواجهة يحتاج تحويلًا للصنف الأب، وإلا قد تحصل مقارنة مراجع بدل مقارنة القيم.",
      "getAt يقبل فقط 0 <= i < count؛ أي قيمة غير ذلك ترجع null.",
      "بحث أكبر/أصغر عنصر يجب أن يكون recursive فعليًا، مع شرط توقف؛ استخدام حلقة وحدها لا يحقق شرط الورقة.",
      "نسخ آخر عنصر مكان المحذوف خطأ هنا؛ الورقة تطلب الحفاظ على الترتيب.",
      "monthly مخزنة فقط ولا تؤثر في الغرامة حسب الورقة."
    ],
    "solution": "// In Eclipse: rename Main to LibraryTest and save as LibraryTest.java.\npublic class Main {\n    public static void main(String[] args) {\n        try { new Library(\"Invalid\", 0); }\n        catch (IllegalArgumentException e) { System.out.println(e.getMessage()); }\n        Library library = new Library(\"Central\", 4);\n        library.add(new Book(\"Gatsby\", \"Scott\", 7, 180, false));\n        library.add(new Book(\"Java\", \"Eckel\", 14, 1000, true));\n        library.add(new Magazine(\"NatGeo\", \"NGS\", 3, 247, true));\n        library.add(new Magazine(\"Time\", \"TI\", 5, 1850, false));\n        System.out.println(\"----------------------------------------\");\n        System.out.print(library);\n        System.out.println(\"----------------------------------------\");\n        library.borrowAll();\n        System.out.println(\"----------------------------------------\");\n        System.out.println(\"Most overdue: \" + library.getMostOverdue());\n    }\n}\ninterface Borrowable {\n    void borrow();\n    int getDueDays();\n}\nabstract class LibraryItem implements Borrowable {\n    protected String title;\n    protected String author;\n    protected int dueDays;\n    public LibraryItem(String title, String author, int dueDays) {\n        this.title = title; this.author = author; this.dueDays = dueDays;\n    }\n    public int getDueDays() { return dueDays; }\n    public abstract double calculateLateFee();\n    public boolean equals(LibraryItem other) {\n        return other != null && title.equals(other.title) && author.equals(other.author);\n    }\n    public String toString() { return title + \" by \" + author + \" (\" + dueDays + \" days)\"; }\n}\nclass Book extends LibraryItem {\n    private int pages;\n    private boolean hardcover;\n    public Book(String title, String author, int dueDays, int pages, boolean hardcover) {\n        super(title, author, dueDays); this.pages = pages; this.hardcover = hardcover;\n    }\n    public void borrow() { System.out.println(\"Borrowed book: \" + title + \" by \" + author + \" (\" + pages + \" pages)\"); }\n    public double calculateLateFee() { return dueDays * (hardcover ? 1.50 : 0.50); }\n    public String toString() { return \"Book: \" + title + \" by \" + author + \" [\" + pages + \" pages] (\" + dueDays + \" days)\"; }\n}\nclass Magazine extends LibraryItem {\n    private int issue;\n    private boolean monthly;\n    public Magazine(String title, String author, int dueDays, int issue, boolean monthly) {\n        super(title, author, dueDays); this.issue = issue; this.monthly = monthly;\n    }\n    public void borrow() { System.out.println(\"Borrowed magazine: \" + title + \" Issue #\" + issue); }\n    public double calculateLateFee() { return dueDays * 0.20; }\n    public String toString() { return \"Magazine: \" + title + \" Issue #\" + issue + \" (\" + dueDays + \" days)\"; }\n}\nclass Library {\n    private String name;\n    private Borrowable[] items;\n    private int count;\n    public Library(String name, int size) {\n        if (size <= 0) throw new IllegalArgumentException(\"Invalid size: \" + size);\n        this.name = name; items = new Borrowable[size]; count = 0;\n    }\n    private boolean same(Borrowable a, Borrowable b) {\n        if (a instanceof LibraryItem && b instanceof LibraryItem) return ((LibraryItem) a).equals((LibraryItem) b);\n        return a.equals(b);\n    }\n    public boolean add(Borrowable b) {\n        if (b == null || count == items.length) return false;\n        for (int i = 0; i < count; i++) if (same(items[i], b)) return false;\n        items[count++] = b; return true;\n    }\n    public boolean remove(Borrowable b) {\n        for (int i = 0; i < count; i++) {\n            if (same(items[i], b)) {\n                for (int j = i; j < count - 1; j++) items[j] = items[j + 1];\n                items[count - 1] = null; count--; return true;\n            }\n        }\n        return false;\n    }\n    public Borrowable getAt(int i) { return i >= 0 && i < count ? items[i] : null; }\n    public void borrowAll() { for (int i = 0; i < count; i++) items[i].borrow(); }\n    public Borrowable getMostOverdue() { return count == 0 ? null : mostOverdueFrom(0); }\n    private Borrowable mostOverdueFrom(int i) {\n        if (i == count - 1) return items[i];\n        Borrowable rest = mostOverdueFrom(i + 1);\n        return items[i].getDueDays() >= rest.getDueDays() ? items[i] : rest;\n    }\n    public String toString() {\n        String result = name + \" Library (\" + count + \"):\\n\";\n        for (int i = 0; i < count; i++) result += items[i] + \"\\n\";\n        return result;\n    }\n}\n",
    "tests": [
      {
        "name": "sample run المكتبة كما في الورقة",
        "stdin": "",
        "expectedContains": [
          "Invalid size: 0",
          "Central Library (4):",
          "Book: Gatsby by Scott [180 pages] (7 days)",
          "Book: Java by Eckel [1000 pages] (14 days)",
          "Magazine: NatGeo Issue #247 (3 days)",
          "Magazine: Time Issue #1850 (5 days)",
          "Borrowed book: Gatsby by Scott (180 pages)",
          "Borrowed book: Java by Eckel (1000 pages)",
          "Borrowed magazine: NatGeo Issue #247",
          "Borrowed magazine: Time Issue #1850",
          "Most overdue: Book: Java by Eckel [1000 pages] (14 days)"
        ]
      }
    ],
    "pageMap": "PDF ص1: التعليمات وUML. ص2: الواجهة والأب وBook وبداية Magazine. ص3: بقية Magazine وLibrary. ص4: LibraryTest والمخرجات.",
    "testNotice": "فحص المخرجات يساعدك على مطابقة المثال فقط؛ لا يثبت صحة الحذف أو recursion أو كل الحالات. أكمل قائمة الفحص الذاتي وراجع rubric."
  },
  {
    "id": "exam3",
    "title": "النموذج ٣ · الغرفة الذكية",
    "subtitle": "Controllable → Device → Light / Thermostat → Room",
    "duration": 110,
    "source": "447 S2 3rd version_.pdf",
    "pdf": "assets/exams/exam3.pdf",
    "originalMainClass": "RoomTest",
    "overview": "أجهزة غرفة ذكية، مع فخ مهم: كل ابن يغيّر equals(Device) ويضيف معيارًا خاصًا به. ترتيب صفحات ملف PDF المتاح في الموقع غير متسلسل؛ رتبنا المطالب هنا حسب أرقام الورقة 1 ثم 2 ثم 3 ثم 4. الزمن الأصلي: ساعة و50 دقيقة. المجموع المعلن: 10 درجات. تمنع الورقة استخدام Java Collections والمكتبات الخارجية؛ استخدم مصفوفة عادية. في الاختبار: اكتب الاسم والرقم الجامعي تعليقًا أعلى كل ملف، وافتح workspace جديدًا وسلّم كل ملفات .java. هذه شروط الورقة للمحاكاة وليست أوامر للموقع.",
    "sourceNotes": [
      "ترتيب الصفحات الفيزيائي داخل PDF: الورقة 1 ثم الورقة 4 ثم الورقة 3 ثم الورقة 2.",
      "إضافة/حذف الأجهزة يجب أن تستخدم equals(Device) بعد التحويل من Controllable، لتُستدعى نسخة Light أو Thermostat ديناميكيًا."
    ],
    "mainNote": "في الورقة اسم صنف التشغيل RoomTest. محرر الموقع يستخدم Main؛ في Eclipse سمّه RoomTest واسم الملف RoomTest.java.",
    "expectedBehavior": "ينشئ Living Room بأربعة أجهزة. محاولة حذف ضوء Ceiling/Philips بلون Cool ترجع false، لأن الموجود Warm. يعمل turnOnAll، والأعلى قدرة ضوء Ceiling بقدرة 60.0 W.",
    "difficulty": "المساواة وتعدد الأشكال",
    "tasks": [
      {
        "title": "١. Controllable",
        "body": "الدالتان:<pre dir=\"ltr\" class=\"language-java\">void turnOn();\ndouble getPowerWatts();</pre>الأولى تطبع تشغيل الجهاز والثانية تعيد الاستهلاك بالواط.",
        "points": 0.5
      },
      {
        "title": "٢. Device abstract implements Controllable",
        "body": "خصائص protected: name:String وbrand:String وpowerWatts:double. الباني Device(name,brand,powerWatts). getPowerWatts ترجع القيمة؛ calculateMonthlyCost مجردة وترجع double؛ equals(Device other) تقارن name وbrand؛ turnOn غير منفّذة في الأب. toString:<pre dir=\"ltr\">&lt;name&gt; [&lt;brand&gt;] (&lt;powerWatts&gt; W)\nCeiling [Philips] (60.0 W)</pre>",
        "points": 1.5
      },
      {
        "title": "٣. Light extends Device",
        "body": "خصائص private: color:String وbrightness:int. الباني Light(name,brand,powerWatts,color,brightness). turnOn تطبع:<pre dir=\"ltr\">Turning on light: &lt;name&gt; [&lt;color&gt;]</pre>calculateMonthlyCost ترجع <code dir=\"ltr\">brightness * powerWatts * 0.01</code>. Override للدالة <code dir=\"ltr\">equals(Device other)</code>: يلزم super.equals(other) وكون other من نوع Light وتطابق color. لا تغيّر نوع المعامل إلى Light. toString:<pre dir=\"ltr\">Light: &lt;name&gt; [&lt;brand&gt;] (&lt;powerWatts&gt; W) [&lt;color&gt;, &lt;brightness&gt;%]</pre>",
        "points": 1.5
      },
      {
        "title": "٤. Thermostat extends Device",
        "body": "خصائص private: targetTemp:double وisHeating:boolean. الباني Thermostat(name,brand,powerWatts,targetTemp,isHeating). turnOn تطبع:<pre dir=\"ltr\">Activating thermostat: &lt;name&gt; at &lt;targetTemp&gt;</pre>calculateMonthlyCost ترجع powerWatts * 0.50 بغض النظر عن isHeating حسب المواصفات. Override لـ equals(Device other): يلزم super.equals(other) وother instanceof Thermostat وتساوي targetTemp. toString:<pre dir=\"ltr\">Thermostat: &lt;name&gt; [&lt;brand&gt;] (&lt;powerWatts&gt; W) [target: &lt;targetTemp&gt;]</pre>",
        "points": 1.25
      },
      {
        "title": "٥. Room",
        "body": "خصائص private: name:String وdevices:Controllable[] وcount:int. Room(name,size) يرمي IllegalArgumentException(\"Invalid size: \" + size) إذا size <= 0. add تمنع التكرار باستخدام equals مع الاستدعاء الصحيح لنسخة الابن. remove تستبدل العنصر بآخر عنصر ثم تنقص count. getAt تعيد الجهاز أو null. turnOnAll تنادي turnOn لكل جهاز. getHighestPower تعيد recursively أعلى powerWatts أو null إن فارغة. toString:<pre dir=\"ltr\">&lt;name&gt; (&lt;count&gt;):\ndevice1\ndevice2\n...</pre>",
        "points": 3.25
      },
      {
        "title": "٦. RoomTest / main",
        "body": "جرّب حجمًا غير صحيح مثل 0 داخل try/catch ثم أنشئ Living Room بسعة 4. أضف بالترتيب:<pre dir=\"ltr\" class=\"language-java\">new Light(&quot;Ceiling&quot;, &quot;Philips&quot;, 60.0, &quot;Warm&quot;, 80)\nnew Thermostat(&quot;Main&quot;, &quot;Nest&quot;, 5.0, 22.5, true)\nnew Light(&quot;Desk&quot;, &quot;Ikea&quot;, 15.0, &quot;White&quot;, 100)\nnew Thermostat(&quot;Bed&quot;, &quot;Hwell&quot;, 5.0, 19.0, false)</pre>اطبع الغرفة. حاول حذف <code dir=\"ltr\">new Light(&quot;Ceiling&quot;, &quot;Philips&quot;, 60.0, &quot;Cool&quot;, 80)</code> واطبع النتيجة: يجب أن تكون false. استدعِ turnOnAll ثم اطبع getHighestPower.",
        "points": 2
      }
    ],
    "uml": "<div class=\"uml-diagram\" dir=\"ltr\" role=\"group\" aria-label=\"مواصفات كلاسات UML\"><section class=\"uml-card\"><h3>interface Controllable</h3><pre class=\"uml-members\" dir=\"ltr\">+ turnOn(): void\n+ getPowerWatts(): double</pre></section><section class=\"uml-card\"><h3>abstract Device</h3><pre class=\"uml-members\" dir=\"ltr\"># name: String\n# brand: String\n# powerWatts: double\n+ Device(name,brand,powerWatts)\n+ getPowerWatts(): double\n+ calculateMonthlyCost(): double {abstract}\n+ equals(other: Device): boolean\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>Light</h3><pre class=\"uml-members\" dir=\"ltr\">- color: String\n- brightness: int\n+ Light(name,brand,powerWatts,color,brightness)\n+ turnOn(): void\n+ calculateMonthlyCost(): double\n+ equals(other: Device): boolean {override}\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>Thermostat</h3><pre class=\"uml-members\" dir=\"ltr\">- targetTemp: double\n- isHeating: boolean\n+ Thermostat(name,brand,powerWatts,targetTemp,isHeating)\n+ turnOn(): void\n+ calculateMonthlyCost(): double\n+ equals(other: Device): boolean {override}\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>Room</h3><pre class=\"uml-members\" dir=\"ltr\">- name: String\n- devices: Controllable[]\n- count: int\n+ Room(name,size)\n+ add(c: Controllable): boolean\n+ remove(c: Controllable): boolean\n+ getAt(i: int): Controllable\n+ turnOnAll(): void\n+ getHighestPower(): Controllable {recursive}\n+ toString(): String</pre></section></div><p>قراءة العلاقات: <code dir=\"ltr\">Device</code> implements <code dir=\"ltr\">Controllable</code>؛ الصنفان الابنان extends الصنف الأب. صنف الحاوية يحتفظ بمصفوفة من نوع الواجهة (علاقة has-a). الرموز: + public، - private، # protected.</p>",
    "hints": [
      "اكتب equals(Device other) في Device أولًا، ثم @Override بنفس التوقيع في كل ابن. اختبار اللون المختلف مصمم لكشف نسيان override.",
      "داخل Light: return other instanceof Light && super.equals(other) && color.equals(((Light) other).color); افحص instanceof قبل التحويل.",
      "داخل Room عند مقارنة مرجعَي Controllable، حوّلهما إلى Device لاستدعاء equals(Device). نوع الكائن الفعلي سيحدد تنفيذ Light أو Thermostat."
    ],
    "rubric": [
      {
        "label": "Controllable",
        "points": 0.5
      },
      {
        "label": "Device",
        "points": 1.5
      },
      {
        "label": "Light مع equals",
        "points": 1.5
      },
      {
        "label": "Thermostat مع equals",
        "points": 1.25
      },
      {
        "label": "Room",
        "points": 3.25
      },
      {
        "label": "RoomTest",
        "points": 2
      }
    ],
    "starter": "// اكتب الحل كاملًا. للويب استخدم Main؛ وفي Eclipse اتبع أسماء ملفات الورقة.\npublic class Main {\n    public static void main(String[] args) {\n        // اختبر برنامجك هنا\n    }\n}\n\n// اكتب interface Controllable هنا\n\n// اكتب abstract class Device هنا\n\n// اكتب class Light هنا\n\n// اكتب class Thermostat هنا\n\n// اكتب class Room هنا\n",
    "selfChecks": [
      "ضوءان بالاسم والماركة واللون نفسه متساويان؛ اختلاف brightness وحده لا يغيّر مساواتهما حسب السؤال.",
      "اختلاف color يمنع مساواة الضوءين. اختلاف targetTemp يمنع مساواة منظمَي الحرارة.",
      "Light وThermostat بالاسم والماركة نفسيهما ليسا متساويين حسب إضافات الأبناء.",
      "حذف Cool يجب ألا يحذف Warm ولا ينقص count.",
      "تكلفة Ceiling = 48.0؛ تكلفة Main thermostat = 2.5."
    ],
    "traps": [
      "count هو عدد العناصر الفعلية؛ items.length هي السعة. الدوران حتى السعة قد يصادف null.",
      "الدالة toString ترجع String؛ لا تطبع داخليًا. دوال التنفيذ مثل play/borrow/turnOn/order تطبع.",
      "equals في الورقة تستقبل الصنف الأب؛ هذه overload مقارنة بـ Object.equals. استدعاؤها من مرجع الواجهة يحتاج تحويلًا للصنف الأب، وإلا قد تحصل مقارنة مراجع بدل مقارنة القيم.",
      "getAt يقبل فقط 0 <= i < count؛ أي قيمة غير ذلك ترجع null.",
      "بحث أكبر/أصغر عنصر يجب أن يكون recursive فعليًا، مع شرط توقف؛ استخدام حلقة وحدها لا يحقق شرط الورقة.",
      "equals(Light other) ليست override لـ equals(Device other)؛ ضع @Override ليكشف المترجم التوقيع الخطأ.",
      "@Override على equals(Device) في الابن صحيح، لكن في Device نفسها لا تضع @Override؛ Object يملك equals(Object).",
      "لا تضف brightness أو isHeating لمعيار المساواة؛ الورقة تحدد color وtargetTemp فقط."
    ],
    "solution": "// In Eclipse: rename Main to RoomTest and save as RoomTest.java.\npublic class Main {\n    public static void main(String[] args) {\n        try { new Room(\"Invalid\", 0); }\n        catch (IllegalArgumentException e) { System.out.println(e.getMessage()); }\n        Room room = new Room(\"Living Room\", 4);\n        room.add(new Light(\"Ceiling\", \"Philips\", 60.0, \"Warm\", 80));\n        room.add(new Thermostat(\"Main\", \"Nest\", 5.0, 22.5, true));\n        room.add(new Light(\"Desk\", \"Ikea\", 15.0, \"White\", 100));\n        room.add(new Thermostat(\"Bed\", \"Hwell\", 5.0, 19.0, false));\n        System.out.println(\"----------------------------------------\");\n        System.out.print(room);\n        System.out.println(\"----------------------------------------\");\n        boolean removed = room.remove(new Light(\"Ceiling\", \"Philips\", 60.0, \"Cool\", 80));\n        System.out.println(\"remove Light Ceiling/Philips (different color) -> \" + removed);\n        System.out.println(\"----------------------------------------\");\n        room.turnOnAll();\n        System.out.println(\"----------------------------------------\");\n        System.out.println(\"Highest power: \" + room.getHighestPower());\n    }\n}\ninterface Controllable {\n    void turnOn();\n    double getPowerWatts();\n}\nabstract class Device implements Controllable {\n    protected String name;\n    protected String brand;\n    protected double powerWatts;\n    public Device(String name, String brand, double powerWatts) {\n        this.name = name; this.brand = brand; this.powerWatts = powerWatts;\n    }\n    public double getPowerWatts() { return powerWatts; }\n    public abstract double calculateMonthlyCost();\n    public boolean equals(Device other) {\n        return other != null && name.equals(other.name) && brand.equals(other.brand);\n    }\n    public String toString() { return name + \" [\" + brand + \"] (\" + powerWatts + \" W)\"; }\n}\nclass Light extends Device {\n    private String color;\n    private int brightness;\n    public Light(String name, String brand, double powerWatts, String color, int brightness) {\n        super(name, brand, powerWatts); this.color = color; this.brightness = brightness;\n    }\n    public void turnOn() { System.out.println(\"Turning on light: \" + name + \" [\" + color + \"]\"); }\n    public double calculateMonthlyCost() { return brightness * powerWatts * 0.01; }\n    @Override\n    public boolean equals(Device other) {\n        return other instanceof Light && super.equals(other) && color.equals(((Light) other).color);\n    }\n    public String toString() { return \"Light: \" + super.toString() + \" [\" + color + \", \" + brightness + \"%]\"; }\n}\nclass Thermostat extends Device {\n    private double targetTemp;\n    private boolean isHeating;\n    public Thermostat(String name, String brand, double powerWatts, double targetTemp, boolean isHeating) {\n        super(name, brand, powerWatts); this.targetTemp = targetTemp; this.isHeating = isHeating;\n    }\n    public void turnOn() { System.out.println(\"Activating thermostat: \" + name + \" at \" + targetTemp); }\n    public double calculateMonthlyCost() { return powerWatts * 0.50; }\n    @Override\n    public boolean equals(Device other) {\n        return other instanceof Thermostat && super.equals(other) && targetTemp == ((Thermostat) other).targetTemp;\n    }\n    public String toString() { return \"Thermostat: \" + super.toString() + \" [target: \" + targetTemp + \"]\"; }\n}\nclass Room {\n    private String name;\n    private Controllable[] devices;\n    private int count;\n    public Room(String name, int size) {\n        if (size <= 0) throw new IllegalArgumentException(\"Invalid size: \" + size);\n        this.name = name; devices = new Controllable[size]; count = 0;\n    }\n    private boolean same(Controllable a, Controllable b) {\n        if (a instanceof Device && b instanceof Device) return ((Device) a).equals((Device) b);\n        return a.equals(b);\n    }\n    public boolean add(Controllable c) {\n        if (c == null || count == devices.length) return false;\n        for (int i = 0; i < count; i++) if (same(devices[i], c)) return false;\n        devices[count++] = c; return true;\n    }\n    public boolean remove(Controllable c) {\n        for (int i = 0; i < count; i++) {\n            if (same(devices[i], c)) {\n                devices[i] = devices[count - 1]; devices[count - 1] = null; count--; return true;\n            }\n        }\n        return false;\n    }\n    public Controllable getAt(int i) { return i >= 0 && i < count ? devices[i] : null; }\n    public void turnOnAll() { for (int i = 0; i < count; i++) devices[i].turnOn(); }\n    public Controllable getHighestPower() { return count == 0 ? null : highestFrom(0); }\n    private Controllable highestFrom(int i) {\n        if (i == count - 1) return devices[i];\n        Controllable rest = highestFrom(i + 1);\n        return devices[i].getPowerWatts() >= rest.getPowerWatts() ? devices[i] : rest;\n    }\n    public String toString() {\n        String result = name + \" (\" + count + \"):\\n\";\n        for (int i = 0; i < count; i++) result += devices[i] + \"\\n\";\n        return result;\n    }\n}\n",
    "tests": [
      {
        "name": "sample run الغرفة واختبار المساواة",
        "stdin": "",
        "expectedContains": [
          "Invalid size: 0",
          "Living Room (4):",
          "Light: Ceiling [Philips] (60.0 W) [Warm, 80%]",
          "Thermostat: Main [Nest] (5.0 W) [target: 22.5]",
          "Light: Desk [Ikea] (15.0 W) [White, 100%]",
          "Thermostat: Bed [Hwell] (5.0 W) [target: 19.0]",
          "remove Light Ceiling/Philips (different color) -> false",
          "Turning on light: Ceiling [Warm]",
          "Activating thermostat: Main at 22.5",
          "Turning on light: Desk [White]",
          "Activating thermostat: Bed at 19.0",
          "Highest power: Light: Ceiling [Philips] (60.0 W) [Warm, 80%]"
        ]
      }
    ],
    "pageMap": "PDF ص1 = الورقة 1: التعليمات وUML. PDF ص2 = الورقة 4: RoomTest والمخرجات. PDF ص3 = الورقة 3: Thermostat وRoom. PDF ص4 = الورقة 2: الواجهة وDevice وLight.",
    "testNotice": "فحص المخرجات يساعدك على مطابقة المثال فقط؛ لا يثبت صحة الحذف أو recursion أو كل الحالات. أكمل قائمة الفحص الذاتي وراجع rubric."
  },
  {
    "id": "exam4",
    "title": "النموذج ٤ · قائمة المطعم",
    "subtitle": "Orderable → MenuItem → Food / Drink → Menu + MenuException",
    "duration": 110,
    "source": "447 S2 4th version.pdf",
    "pdf": "assets/exams/exam4.pdf",
    "originalMainClass": "MenuTest",
    "overview": "قائمة مطعم مع استثناء مخصص checked. هنا throws جزء من صحة البناة، والبحث recursive عن الأصغر بدل الأكبر. أربع صفحات تشمل MenuTest. الزمن الأصلي: ساعة و50 دقيقة. المجموع المعلن: 10 درجات. تمنع الورقة استخدام Java Collections والمكتبات الخارجية؛ استخدم مصفوفة عادية. في الاختبار: اكتب الاسم والرقم الجامعي تعليقًا أعلى كل ملف، وافتح workspace جديدًا وسلّم كل ملفات .java. هذه شروط الورقة للمحاكاة وليست أوامر للموقع.",
    "sourceNotes": [
      "يوجد تعارض مطبوع في توزيع الدرجات: عنوان Q1 يقول تقريبًا 7.5، بينما الأجزاء المفصلة الظاهرة مجموعها 8، ومع main بدرجتين يطابق المجموع 10 في المقدمة. نعتمد التفصيل الظاهر للتدريب ونوضح التعارض.",
      "نص main يقترح في البداية try/catch واحدًا، ثم يوضح التلميح أن محاولة الحجم غير الصحيح تُلتقط أولًا ويمكن إنشاء القائمة الصحيحة في try/catch ثانٍ. الحل يستخدم كتلتين حتى يستمر التنفيذ.",
      "بعض الصور مائلة وضبابية. مواصفات البناة والأسعار والمخرجات واضحة بما يكفي؛ الملف الأصلي متاح في الموقع للمراجعة."
    ],
    "mainNote": "في الورقة اسم صنف التشغيل MenuTest. محرر الموقع يستخدم Main؛ في Eclipse سمّه MenuTest واسم الملف MenuTest.java.",
    "expectedBehavior": "يطبع Invalid size: 0 ثم يستمر، ويبني Lunch بأربعة عناصر، يطلب كل عنصر بالطريقة المناسبة، والأرخص Lemon بسعر 8.0 SAR. السعر السالب والحجم غير الموجب يرميان MenuException.",
    "difficulty": "الاختبار الشامل",
    "tasks": [
      {
        "title": "١. Orderable",
        "body": "الدالتان:<pre dir=\"ltr\" class=\"language-java\">void order();\ndouble getPrice();</pre>order تطبع الطلب، وgetPrice تعيد السعر بالريال.",
        "points": 0.5
      },
      {
        "title": "٢. MenuException",
        "body": "استثناء مخصص checked يورّث Exception. الباني <code dir=\"ltr\">MenuException(String message)</code> يستدعي <code dir=\"ltr\">super(message)</code> لتمرير الرسالة.",
        "points": 0.25
      },
      {
        "title": "٣. MenuItem abstract implements Orderable",
        "body": "خصائص protected: name:String وprice:double وprepMinutes:int. الباني MenuItem(name,price,prepMinutes) يعلن throws MenuException، وإذا price < 0 ينفذ:<pre dir=\"ltr\" class=\"language-java\">throw new MenuException(&quot;Invalid price: &quot; + price);</pre>getPrice تعيد price؛ calculateTaxedPrice مجردة وترجع double؛ equals(MenuItem other) تقارن name فقط. لا تنفذ order في الأب. toString:<pre dir=\"ltr\">&lt;name&gt; (&lt;price&gt; SAR)\nBurger (25.0 SAR)</pre>",
        "points": 1.5
      },
      {
        "title": "٤. Food extends MenuItem",
        "body": "خصائص private: cuisine:String وvegetarian:boolean. الباني Food(name,price,prepMinutes,cuisine,vegetarian) يستدعي super(name,price,prepMinutes) ويعلن throws MenuException. order تطبع:<pre dir=\"ltr\">Ordering food: &lt;name&gt; [&lt;cuisine&gt;]</pre>calculateTaxedPrice تعيد price * 1.15 (ضريبة 15%). toString:<pre dir=\"ltr\">Food: &lt;name&gt; [&lt;cuisine&gt;] (&lt;price&gt; SAR)</pre>",
        "points": 1.25
      },
      {
        "title": "٥. Drink extends MenuItem",
        "body": "خصائص private: volumeML:int وcold:boolean. الباني Drink(name,price,prepMinutes,volumeML,cold) يستدعي super ويعلن throws MenuException. order تطبع:<pre dir=\"ltr\">Pouring drink: &lt;name&gt; (&lt;volumeML&gt;mL)</pre>calculateTaxedPrice تعيد price * 1.15. toString يستخدم تنسيقًا مختلفًا للمليلتر:<pre dir=\"ltr\">Drink: &lt;name&gt; (&lt;volumeML&gt; mL, &lt;price&gt; SAR)</pre>",
        "points": 1
      },
      {
        "title": "٦. Menu",
        "body": "خصائص private: name:String وitems:Orderable[] وcount:int. الباني Menu(name,size) يعلن throws MenuException، ويرميه بالنص Invalid size: ثم size إذا size <= 0. add تضيف إذا توجد مساحة ولا يوجد عنصر بالاسم نفسه باستخدام equals. remove تستبدل المحذوف بآخر عنصر ثم تنقص count. getAt تعيد العنصر أو null. orderAll تستدعي order لكل عنصر. getCheapest تعيد recursively أصغر price أو null إذا فارغة. toString:<pre dir=\"ltr\">&lt;name&gt; Menu (&lt;count&gt;):\nitem1\nitem2\n...</pre>",
        "points": 3.5
      },
      {
        "title": "٧. MenuTest / main",
        "body": "كل استدعاء قد يرمي MenuException يجب أن يعالج بـ try/catch. جرّب Menu بحجم 0، التقط الرسالة ثم تابع. أنشئ Lunch بسعة 4 وأضف:<pre dir=\"ltr\" class=\"language-java\">new Food(&quot;Burger&quot;, 25.0, 12, &quot;US&quot;, false)\nnew Food(&quot;Salad&quot;, 18.0, 5, &quot;Med&quot;, true)\nnew Drink(&quot;Lemon&quot;, 8.0, 2, 350, true)\nnew Drink(&quot;Coffee&quot;, 12.0, 3, 250, false)</pre>اطبع القائمة، استدعِ orderAll ثم اطبع getCheapest. استخدم كتلة try/catch منفصلة للمحاولة الفاشلة كي لا تتجاوز إنشاء القائمة الصحيحة.",
        "points": 2
      }
    ],
    "uml": "<div class=\"uml-diagram\" dir=\"ltr\" role=\"group\" aria-label=\"مواصفات كلاسات UML\"><section class=\"uml-card\"><h3>interface Orderable</h3><pre class=\"uml-members\" dir=\"ltr\">+ order(): void\n+ getPrice(): double</pre></section><section class=\"uml-card\"><h3>abstract MenuItem</h3><pre class=\"uml-members\" dir=\"ltr\"># name: String\n# price: double\n# prepMinutes: int\n+ MenuItem(name,price,prepMinutes) throws MenuException\n+ getPrice(): double\n+ calculateTaxedPrice(): double {abstract}\n+ equals(other: MenuItem): boolean\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>Food</h3><pre class=\"uml-members\" dir=\"ltr\">- cuisine: String\n- vegetarian: boolean\n+ Food(...) throws MenuException\n+ order(): void\n+ calculateTaxedPrice(): double\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>Drink</h3><pre class=\"uml-members\" dir=\"ltr\">- volumeML: int\n- cold: boolean\n+ Drink(...) throws MenuException\n+ order(): void\n+ calculateTaxedPrice(): double\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>Menu</h3><pre class=\"uml-members\" dir=\"ltr\">- name: String\n- items: Orderable[]\n- count: int\n+ Menu(name,size) throws MenuException\n+ add(o: Orderable): boolean\n+ remove(o: Orderable): boolean\n+ getAt(i: int): Orderable\n+ orderAll(): void\n+ getCheapest(): Orderable {recursive}\n+ toString(): String</pre></section><section class=\"uml-card\"><h3>MenuException extends Exception</h3><pre class=\"uml-members\" dir=\"ltr\">+ MenuException(message: String)</pre></section></div><p>قراءة العلاقات: <code dir=\"ltr\">MenuItem</code> implements <code dir=\"ltr\">Orderable</code>؛ الصنفان الابنان extends الصنف الأب. صنف الحاوية يحتفظ بمصفوفة من نوع الواجهة (علاقة has-a). الرموز: + public، - private، # protected.</p>",
    "hints": [
      "ابدأ بـ class MenuException extends Exception. الباني يحتوي super(message). هذا checked، لذا يفرض المترجم المعالجة أو التصريح.",
      "MenuItem قد يرمي الاستثناء؛ إذن Food وDrink اللذان يستدعيان super(...) يجب أن يعلنا throws MenuException أيضًا. main يمسكه بـ catch(MenuException e).",
      "getCheapest يستخدم نفس قالب البحث recursive لكن المقارنة <= بدل >=. قارن getPrice الأصلية لا calculateTaxedPrice. افصل تجربة الحجم 0 عن إنشاء Lunch حتى يستمر البرنامج."
    ],
    "rubric": [
      {
        "label": "Orderable",
        "points": 0.5
      },
      {
        "label": "MenuException",
        "points": 0.25
      },
      {
        "label": "MenuItem",
        "points": 1.5
      },
      {
        "label": "Food",
        "points": 1.25
      },
      {
        "label": "Drink",
        "points": 1
      },
      {
        "label": "Menu",
        "points": 3.5
      },
      {
        "label": "MenuTest",
        "points": 2
      }
    ],
    "rubricNote": "مجموع التفصيل الظاهر 10؛ عنوان Q1 في الورقة يذكر تقريبًا 7.5 بدل 8. هذا اختلاف في المصدر.",
    "starter": "// اكتب الحل كاملًا. للويب استخدم Main؛ وفي Eclipse اتبع أسماء ملفات الورقة.\npublic class Main {\n    public static void main(String[] args) {\n        // اختبر برنامجك هنا\n    }\n}\n\n// اكتب interface Orderable هنا\n\n// اكتب abstract class MenuItem هنا\n\n// اكتب class Food هنا\n\n// اكتب class Drink هنا\n\n// اكتب class Menu هنا\n\n// اكتب class MenuException extends Exception هنا\n",
    "selfChecks": [
      "إنشاء Food بسعر -1 يطبع رسالة Invalid price: -1.0 عند التقاط MenuException.",
      "السعر 0 مسموح لأن الشرط price < 0، أما الحجم 0 فمرفوض لأن الشرط size <= 0.",
      "عنصران بالاسم نفسه مكرران حتى لو اختلف نوعهما أو السعر.",
      "بعد catch للمحاولة الفاشلة يجب أن يظهر Lunch Menu (4)، وإلا توقفت بقية الأوامر داخل try.",
      "السعر بعد الضريبة: Burger = 28.75؛ Lemon = 9.2 (قد يظهر تمثيل double قريب جدًا)."
    ],
    "traps": [
      "count هو عدد العناصر الفعلية؛ items.length هي السعة. الدوران حتى السعة قد يصادف null.",
      "الدالة toString ترجع String؛ لا تطبع داخليًا. دوال التنفيذ مثل play/borrow/turnOn/order تطبع.",
      "equals في الورقة تستقبل الصنف الأب؛ هذه overload مقارنة بـ Object.equals. استدعاؤها من مرجع الواجهة يحتاج تحويلًا للصنف الأب، وإلا قد تحصل مقارنة مراجع بدل مقارنة القيم.",
      "getAt يقبل فقط 0 <= i < count؛ أي قيمة غير ذلك ترجع null.",
      "بحث أكبر/أصغر عنصر يجب أن يكون recursive فعليًا، مع شرط توقف؛ استخدام حلقة وحدها لا يحقق شرط الورقة.",
      "throws تعلن احتمال الرمي؛ throw ترمي كائن الاستثناء فعليًا.",
      "استخدام RuntimeException بدل Exception يغير المطلوب؛ MenuException هنا checked.",
      "نسيان throws في باني Food أو Drink يؤدي إلى خطأ ترجمة عند super.",
      "لا تحاول متابعة الأوامر بعد السطر الذي رمى الاستثناء داخل try نفسها؛ التنفيذ ينتقل إلى catch.",
      "تحقق الأصغر باستخدام price وليس prepMinutes أو taxed price."
    ],
    "solution": "// In Eclipse: rename Main to MenuTest and save as MenuTest.java.\npublic class Main {\n    public static void main(String[] args) {\n        try { new Menu(\"Invalid\", 0); }\n        catch (MenuException e) { System.out.println(e.getMessage()); }\n        try {\n            Menu menu = new Menu(\"Lunch\", 4);\n            menu.add(new Food(\"Burger\", 25.0, 12, \"US\", false));\n            menu.add(new Food(\"Salad\", 18.0, 5, \"Med\", true));\n            menu.add(new Drink(\"Lemon\", 8.0, 2, 350, true));\n            menu.add(new Drink(\"Coffee\", 12.0, 3, 250, false));\n            System.out.println(\"----------------------------------------\");\n            System.out.print(menu);\n            System.out.println(\"----------------------------------------\");\n            menu.orderAll();\n            System.out.println(\"----------------------------------------\");\n            System.out.println(\"Cheapest: \" + menu.getCheapest());\n        } catch (MenuException e) { System.out.println(e.getMessage()); }\n    }\n}\ninterface Orderable {\n    void order();\n    double getPrice();\n}\nclass MenuException extends Exception {\n    public MenuException(String message) { super(message); }\n}\nabstract class MenuItem implements Orderable {\n    protected String name;\n    protected double price;\n    protected int prepMinutes;\n    public MenuItem(String name, double price, int prepMinutes) throws MenuException {\n        if (price < 0) throw new MenuException(\"Invalid price: \" + price);\n        this.name = name; this.price = price; this.prepMinutes = prepMinutes;\n    }\n    public double getPrice() { return price; }\n    public abstract double calculateTaxedPrice();\n    public boolean equals(MenuItem other) { return other != null && name.equals(other.name); }\n    public String toString() { return name + \" (\" + price + \" SAR)\"; }\n}\nclass Food extends MenuItem {\n    private String cuisine;\n    private boolean vegetarian;\n    public Food(String name, double price, int prepMinutes, String cuisine, boolean vegetarian) throws MenuException {\n        super(name, price, prepMinutes); this.cuisine = cuisine; this.vegetarian = vegetarian;\n    }\n    public void order() { System.out.println(\"Ordering food: \" + name + \" [\" + cuisine + \"]\"); }\n    public double calculateTaxedPrice() { return price * 1.15; }\n    public String toString() { return \"Food: \" + name + \" [\" + cuisine + \"] (\" + price + \" SAR)\"; }\n}\nclass Drink extends MenuItem {\n    private int volumeML;\n    private boolean cold;\n    public Drink(String name, double price, int prepMinutes, int volumeML, boolean cold) throws MenuException {\n        super(name, price, prepMinutes); this.volumeML = volumeML; this.cold = cold;\n    }\n    public void order() { System.out.println(\"Pouring drink: \" + name + \" (\" + volumeML + \"mL)\"); }\n    public double calculateTaxedPrice() { return price * 1.15; }\n    public String toString() { return \"Drink: \" + name + \" (\" + volumeML + \" mL, \" + price + \" SAR)\"; }\n}\nclass Menu {\n    private String name;\n    private Orderable[] items;\n    private int count;\n    public Menu(String name, int size) throws MenuException {\n        if (size <= 0) throw new MenuException(\"Invalid size: \" + size);\n        this.name = name; items = new Orderable[size]; count = 0;\n    }\n    private boolean same(Orderable a, Orderable b) {\n        if (a instanceof MenuItem && b instanceof MenuItem) return ((MenuItem) a).equals((MenuItem) b);\n        return a.equals(b);\n    }\n    public boolean add(Orderable o) {\n        if (o == null || count == items.length) return false;\n        for (int i = 0; i < count; i++) if (same(items[i], o)) return false;\n        items[count++] = o; return true;\n    }\n    public boolean remove(Orderable o) {\n        for (int i = 0; i < count; i++) {\n            if (same(items[i], o)) {\n                items[i] = items[count - 1]; items[count - 1] = null; count--; return true;\n            }\n        }\n        return false;\n    }\n    public Orderable getAt(int i) { return i >= 0 && i < count ? items[i] : null; }\n    public void orderAll() { for (int i = 0; i < count; i++) items[i].order(); }\n    public Orderable getCheapest() { return count == 0 ? null : cheapestFrom(0); }\n    private Orderable cheapestFrom(int i) {\n        if (i == count - 1) return items[i];\n        Orderable rest = cheapestFrom(i + 1);\n        return items[i].getPrice() <= rest.getPrice() ? items[i] : rest;\n    }\n    public String toString() {\n        String result = name + \" Menu (\" + count + \"):\\n\";\n        for (int i = 0; i < count; i++) result += items[i] + \"\\n\";\n        return result;\n    }\n}\n",
    "tests": [
      {
        "name": "sample run المطعم واستمرار البرنامج بعد catch",
        "stdin": "",
        "expectedContains": [
          "Invalid size: 0",
          "Lunch Menu (4):",
          "Food: Burger [US] (25.0 SAR)",
          "Food: Salad [Med] (18.0 SAR)",
          "Drink: Lemon (350 mL, 8.0 SAR)",
          "Drink: Coffee (250 mL, 12.0 SAR)",
          "Ordering food: Burger [US]",
          "Ordering food: Salad [Med]",
          "Pouring drink: Lemon (350mL)",
          "Pouring drink: Coffee (250mL)",
          "Cheapest: Drink: Lemon (350 mL, 8.0 SAR)"
        ]
      }
    ],
    "pageMap": "PDF ص1: التعليمات وUML. ص2: Orderable وMenuException وMenuItem وFood. ص3: Drink وMenu. ص4: MenuTest والمخرجات.",
    "testNotice": "فحص المخرجات يساعدك على مطابقة المثال فقط؛ لا يثبت صحة الحذف أو recursion أو كل الحالات. أكمل قائمة الفحص الذاتي وراجع rubric."
  }
];
