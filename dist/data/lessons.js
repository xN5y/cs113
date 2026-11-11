window.LESSONS = [
  {
    "id": "hello",
    "phase": "foundation",
    "title": "أول سطر Java · كيف يفكر البرنامج؟",
    "shortTitle": "أول سطر Java",
    "minutes": 8,
    "summary": "نفهم أين يبدأ التنفيذ وكيف نقرأ القوس والفاصلة قبل حفظ أي شيء.",
    "source": "مراجعة تمهيدية لـ Java 1 (أُعدّت لهذا الموقع، وليست نقلاً من سلايدات CS113)",
    "objectives": [
      "تشغيل برنامج صغير وفهم main",
      "تمييز النص عن الأمر",
      "إصلاح خطأ فاصلة أو اسم"
    ],
    "sections": [
      {
        "title": "تخيّل البرنامج وصفة",
        "html": "<p>الكمبيوتر ينفّذ تعليمات دقيقة بالترتيب. ما يعرف نيتك: إذا كتبت اسمًا مختلفًا بحرف واحد، يعتبره اسمًا آخر. البرمجة هي تقسيم المطلوب إلى خطوات صغيرة، ثم تجربتها. هنا كل مثال يمكنك تعديله وتشغيله؛ لا يكفي تقرأ الحل بعينك.</p>"
      },
      {
        "title": "أصغر برنامج سنستخدمه",
        "html": "<pre class=\"language-java\"><code>public class Main {\n    public static void main(String[] args) {\n        System.out.println(&quot;Hello Java&quot;);\n    }\n}</code></pre><p><code>class Main</code> صندوق الكود واسمه Main. الملف اسمه Main.java. <code>main</code> نقطة البداية. ما بين القوسين المعقوفين <code>{ }</code> هو محتوى الصندوق. <code>println</code> اطبع ثم انتقل لسطر جديد. النص داخل علامتي <code>\" \"</code>. الفاصلة المنقوطة <code>;</code> تنهي التعليمة.</p>"
      },
      {
        "title": "اقرأ السطور على مهل",
        "html": "<p><code>public</code> يسمح بالوصول. <code>static</code> يسمح باستدعاء البداية دون صنع كائن. <code>void</code> يعني أن main لا ترجع قيمة. <code>String[] args</code> مكان بيانات البداية؛ الآن لا نحتاج استخدامه. احفظ شكل main مؤقتًا، وستفهم تفاصيله في دروس الكائنات والدوال.</p><p><code>//</code> يبدأ تعليقًا يقرأه الإنسان ويتجاهله المترجم. الفراغات والترتيب تساعدك، والحروف الكبيرة مهمة: <code>System</code> صحيح و<code>system</code> مختلف.</p>"
      },
      {
        "title": "توقّع ثم شغّل",
        "html": "<pre class=\"language-java\"><code>System.out.print(&quot;CS&quot;);\nSystem.out.println(113);\nSystem.out.println(&quot;Ready&quot;);</code></pre><p>قبل التشغيل اكتب توقعك: أول أمر لا ينزل سطرًا، فيظهر CS113 ثم Ready في سطر جديد. غيّر print الأولى إلى println وشاهد الفرق.</p>"
      },
      {
        "title": "حين يظهر الأحمر",
        "html": "<p>خطأ الترجمة يعني أن Java لم تفهم صياغة الكود؛ لن يبدأ التنفيذ. اقرأ أول رسالة وأول رقم سطر. قد يكون السبب في السطر السابق مثل فاصلة مفقودة. لا تحذف البرنامج كله. أعد القوس أو الفاصلة ثم شغّل. خطأ التنفيذ يحدث بعد بدء البرنامج وسنأخذه لاحقًا.</p>"
      }
    ],
    "starter": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello Java\");\n    }\n}\n",
    "expectedOutput": "Hello Java",
    "challenge": "<p>اكتب برنامجًا يطبع ثلاث أسطر بالترتيب: <code>My name is Student</code> ثم <code>CS113</code> ثم <code>I can learn Java</code>. اكتب الأوامر بنفسك.</p>",
    "hints": [
      "ابدأ من هيكل Main وmain الموجود.",
      "تحتاج ثلاث تعليمات System.out.println.",
      "ضع كل جملة بين علامتي تنصيص وأنهِ الأمر بـ ;."
    ],
    "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"My name is Student\");\n        System.out.println(\"CS113\");\n        System.out.println(\"I can learn Java\");\n    }\n}\n",
    "quiz": [
      {
        "question": "أين يبدأ تشغيل البرنامج؟",
        "choices": [
          "عند أول تعليق",
          "داخل main",
          "عند آخر قوس"
        ],
        "answer": 1,
        "explanation": "main نقطة البداية في البرامج التي نكتبها."
      },
      {
        "question": "ما الفرق بين print وprintln؟",
        "choices": [
          "println ينزل سطرًا بعد الطباعة",
          "print يطبع أرقامًا فقط",
          "لا فرق"
        ],
        "answer": 0,
        "explanation": "كلاهما يطبع، وprintln يضيف نهاية سطر."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "values",
    "phase": "foundation",
    "title": "المتغيرات والحساب والنصوص",
    "shortTitle": "المتغيرات والحساب والنصوص",
    "minutes": 14,
    "summary": "صناديق للقيم، والفرق الذي يغيّر نتيجة القسمة والمقارنة.",
    "source": "مراجعة تمهيدية لـ Java 1 (أُعدّت لهذا الموقع، وليست نقلاً من سلايدات CS113)",
    "objectives": [
      "اختيار int وdouble وString وboolean",
      "حساب قيمة دون فقد الكسور",
      "مقارنة النصوص بـ equals"
    ],
    "sections": [
      {
        "title": "المتغير صندوق له نوع واسم",
        "html": "<p>في <code>int age = 20;</code> النوع int للأعداد الصحيحة، age اسم الصندوق، و20 قيمته. <code>=</code> يضع قيمة في المتغير؛ لا يعني المقارنة. يمكن تغيير القيمة لاحقًا بـ <code>age = 21;</code>. النوع يبقى كما هو.</p><pre class=\"language-java\"><code>int count = 3;\ndouble price = 12.5;\nchar grade = &#x27;A&#x27;;\nboolean passed = true;\nString name = &quot;Student&quot;;</code></pre><p>char حرف واحد بعلامتي تنصيص مفردتين. String نص بعلامتين مزدوجتين. boolean إما true أو false. اسم المتغير يبدأ بحرف عادةً، بلا مسافات.</p>"
      },
      {
        "title": "الحساب والقسمة",
        "html": "<p>العمليات <code>+ - * /</code> هي الجمع والطرح والضرب والقسمة. الأقواس تحسم ترتيب العمليات. <code>%</code> باقي القسمة، مثل 7 % 2 تساوي 1. <code>count++</code> يزيد واحدًا، و<code>sum += x</code> اختصار sum = sum + x.</p><pre class=\"language-java\"><code>System.out.println(5 / 2);     // 2\nSystem.out.println(5.0 / 2);   // 2.5\nint total = 5;\nSystem.out.println((double) total / 2);</code></pre><p>قسمة int على int تنتج int حتى لو وضعتها بعد ذلك في double. التحويل قبل القسمة يجعل الحساب عشريًا.</p>"
      },
      {
        "title": "النص ليس الرقم",
        "html": "<pre class=\"language-java\"><code>System.out.println(&quot;Total: &quot; + 2 + 3);     // Total: 23\nSystem.out.println(&quot;Total: &quot; + (2 + 3));   // Total: 5\nString a = new String(&quot;Java&quot;);\nString b = new String(&quot;Java&quot;);\nSystem.out.println(a.equals(b));          // true</code></pre><p>عندما يبدأ الجمع بنص، يضم النصوص. <code>equals</code> يقارن محتوى String. <code>==</code> مع الكائنات يقارن هل المرجعان يشيران إلى الكائن نفسه، ولذلك لا تعتمد عليه لمقارنة الأسماء. مع int استخدم ==.</p>"
      },
      {
        "title": "أدوات النص التي تحتاجها",
        "html": "<pre class=\"language-java\"><code>String s = &quot;  Java  &quot;;\nSystem.out.println(s.trim());\nSystem.out.println(&quot;Java&quot;.length());\nSystem.out.println(&quot;Java&quot;.charAt(0));\nint number = Integer.parseInt(&quot;113&quot;);</code></pre><p><code>trim()</code> يرجع نصًا بلا فراغات طرفية. <code>length()</code> عدد الحروف، و<code>charAt(0)</code> أول حرف لأن العد يبدأ من صفر. <code>substring(0,2)</code> من الفهرس صفر إلى ما قبل 2. String لا يتغير من الداخل؛ إذا أردت الاحتفاظ بنتيجة trim اكتب <code>s = s.trim();</code>.</p>"
      },
      {
        "title": "توقّع وغيّر",
        "html": "<p>في المثال عدّل quantity إلى 4 ثم توقّع المجموع قبل التشغيل. بعده جرّب <code>5 / 2</code> و<code>5.0 / 2</code>. إذا أخطأت في التوقع، فهذه معلومة مفيدة عن قاعدة تحتاج تدريبًا، وليست علامة أنك لا تفهم.</p>"
      }
    ],
    "starter": "public class Main {\n    public static void main(String[] args) {\n        int quantity = 3;\n        double price = 12.5;\n        double total = quantity * price;\n        System.out.println(total);\n        System.out.println(\"Java\".equals(\"java\"));\n    }\n}\n",
    "expectedOutput": "37.5\nfalse",
    "challenge": "<p>ثلاث درجات صحيحة: 70 و80 و95. خزّنها في متغيرات، واحسب متوسطها كـ double ثم اطبع <code>Average: 81.66666666666667</code>. لا تكتب المتوسط جاهزًا.</p>",
    "hints": [
      "المتوسط مجموع الدرجات مقسومًا على عددها.",
      "قسمة مجموع صحيح على 3 تفقد الكسور.",
      "اقسم المجموع على 3.0 أو حوّله إلى double قبل القسمة."
    ],
    "solution": "public class Main {\n    public static void main(String[] args) {\n        int a = 70, b = 80, c = 95;\n        double average = (a + b + c) / 3.0;\n        System.out.println(\"Average: \" + average);\n    }\n}\n",
    "quiz": [
      {
        "question": "ما نتيجة double x = 5 / 2;؟",
        "choices": [
          "2.5",
          "2.0",
          "خطأ ترجمة"
        ],
        "answer": 1,
        "explanation": "أجريت القسمة بين int أولًا فنتج 2، ثم خُزّن كـ 2.0."
      },
      {
        "question": "كيف نقارن محتوى اسمين؟",
        "choices": [
          "name1 == name2",
          "name1.equals(name2)",
          "name1 = name2"
        ],
        "answer": 1,
        "explanation": "equals للنصوص تقارن الحروف؛ = إسناد و== يقارن المراجع."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "conditions",
    "phase": "foundation",
    "title": "الشروط وإدخال المستخدم",
    "shortTitle": "الشروط وإدخال المستخدم",
    "minutes": 15,
    "summary": "حوّل جملة إذا حدث كذا إلى قرار واضح، واقرأ البيانات.",
    "source": "مراجعة تمهيدية لـ Java 1 (أُعدّت لهذا الموقع، وليست نقلاً من سلايدات CS113)",
    "objectives": [
      "كتابة if/else بشروط صحيحة",
      "استخدام && و||",
      "قراءة Scanner بلا مشكلة السطر الفارغ"
    ],
    "sections": [
      {
        "title": "if سؤال نتيجته صح أو خطأ",
        "html": "<pre class=\"language-java\"><code>int mark = 75;\nif (mark &gt;= 60) {\n    System.out.println(&quot;Pass&quot;);\n} else {\n    System.out.println(&quot;Fail&quot;);\n}</code></pre><p>اختبر الشرط بين القوسين. إذا true نفّذ صندوق if، وإلا صندوق else. <code>else if</code> يسمح بخيار إضافي. لا تضع فاصلة منقوطة بعد <code>if (...)</code> لأنها تفصل القرار عن جسمه.</p>"
      },
      {
        "title": "مقارنة ودمج الشروط",
        "html": "<p><code>==</code> يساوي، <code>!=</code> لا يساوي، <code>&gt; &lt; &gt;= &lt;=</code> مقارنات العدد. <code>&amp;&amp;</code> يعني الشرطان معًا. <code>||</code> واحد منهما يكفي. <code>!</code> يعكس boolean.</p><pre class=\"language-java\"><code>boolean valid = mark &gt;= 0 &amp;&amp; mark &lt;= 100;\nif (!valid) {\n    System.out.println(&quot;Invalid mark&quot;);\n}</code></pre><p>لا تكتب 0 &lt;= mark &lt;= 100. اكتب المقارنتين كاملتين وبينهما &amp;&amp;. التعبير <code>String result = mark &gt;= 60 ? \"Pass\" : \"Fail\";</code> اختصار اختيار قيمة: إذا الشرط true نأخذ ما بعد ?، وإلا ما بعد :. يمكن دائمًا كتابته بـif/else أوضح. القيمتان 0 و100 داخل النطاق؛ هذه تسمى حالات حدودية وتستحق تجربة.</p>"
      },
      {
        "title": "Scanner بوابة الإدخال",
        "html": "<pre class=\"language-java\"><code>import java.util.Scanner;\n// inside main:\nScanner input = new Scanner(System.in);\nString name = input.nextLine();\nint age = input.nextInt();\nSystem.out.println(name + &quot; &quot; + age);</code></pre><p>import يجعل اسم Scanner معروفًا. <code>new</code> يصنع قارئًا. System.in مصدر الإدخال. <code>nextInt()</code> يقرأ عددًا صحيحًا وnextDouble عددًا عشريًا. <code>next()</code> كلمة واحدة، وnextLine السطر كله. في محرر الموقع ضع المدخلات في مربع الإدخال قبل التشغيل.</p>"
      },
      {
        "title": "الفخ الشائع وبديل بسيط",
        "html": "<p>بعد nextInt تبقى نهاية السطر. لو استدعيت nextLine فورًا قد ترجع سطرًا فارغًا. استهلكه بـ nextLine إضافية، أو اقرأ كل شيء سطرًا وحوّل العدد:</p><pre class=\"language-java\"><code>Scanner input = new Scanner(System.in);\nint age = Integer.parseInt(input.nextLine());\nString name = input.nextLine();</code></pre><p>القيمة النصية \"abc\" ليست رقمًا؛ تحويلها يفشل. سنعالج هذا في exceptions. <code>switch</code> ينفع لمطابقة قيمة مع خيارات محددة، وbreak يوقف انتقال التنفيذ للحالة التالية.</p>"
      },
      {
        "title": "جرّب الحدود",
        "html": "<p>غيّر mark في المثال إلى 59 ثم 60 ثم 100 ثم 101. لا تكتف بتجربة قيمة وسطية. هل 101 نجاح أم إدخال غير صالح؟ ضع فحص النطاق قبل التصنيف. قاعدة مفيدة: عالج الإدخال غير الصحيح أولًا، ثم الحالة المعتادة.</p>"
      }
    ],
    "starter": "public class Main {\n    public static void main(String[] args) {\n        int mark = 60;\n        if (mark < 0 || mark > 100) {\n            System.out.println(\"Invalid\");\n        } else if (mark >= 60) {\n            System.out.println(\"Pass\");\n        } else {\n            System.out.println(\"Fail\");\n        }\n    }\n}\n",
    "expectedOutput": "Pass",
    "challenge": "<p>اقرأ العمر من الإدخال. إذا كان أقل من صفر اطبع Invalid، من 0 إلى 17 اطبع Child، من 18 وما فوق اطبع Adult. جرّب المدخلات -1 و17 و18 كل مرة منفصلة.</p>",
    "hints": [
      "استخدم Scanner وnextInt.",
      "ابدأ بشرط age < 0 ثم else if للعمر الأصغر من 18.",
      "الفرع else الأخير يغطي البالغين."
    ],
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        int age = input.nextInt();\n        if (age < 0) System.out.println(\"Invalid\");\n        else if (age < 18) System.out.println(\"Child\");\n        else System.out.println(\"Adult\");\n    }\n}\n",
    "quiz": [
      {
        "question": "شرط عمر بين 18 و30 شاملًا؟",
        "choices": [
          "age >= 18 || age <= 30",
          "age >= 18 && age <= 30",
          "18 <= age <= 30"
        ],
        "answer": 1,
        "explanation": "يجب تحقق الحدين معًا."
      },
      {
        "question": "nextLine بعد nextInt قد يبدو فارغًا لأن…",
        "choices": [
          "النصوص غير مسموحة",
          "نهاية السطر بقيت في الإدخال",
          "Scanner يحتاج قارئًا ثانيًا"
        ],
        "answer": 1,
        "explanation": "استهلك بقية السطر أو اقرأ سطرًا كاملًا ثم حوّله."
      }
    ],
    "mode": "console",
    "stdin": "18",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "loops",
    "phase": "foundation",
    "title": "الحلقات · كرّر بعقل",
    "shortTitle": "الحلقات",
    "minutes": 13,
    "summary": "العدّ، الجمع، البحث، والتوقف دون حلقة لا تنتهي.",
    "source": "مراجعة تمهيدية لـ Java 1 (أُعدّت لهذا الموقع، وليست نقلاً من سلايدات CS113)",
    "objectives": [
      "قراءة أجزاء for",
      "استخدام while وتحديث الحالة",
      "حساب مجموع وعدد بشروط"
    ],
    "sections": [
      {
        "title": "لماذا نحتاج التكرار؟",
        "html": "<p>بدل كتابة خمس تعليمات طباعة، نكتب قاعدة تتكرر. حلقة for تحتوي: البداية، شرط الاستمرار، والتغيير بعد كل دورة. الجسم ينفّذ فقط ما دام الشرط true.</p><pre class=\"language-java\"><code>for (int i = 0; i &lt; 3; i++) {\n    System.out.println(i);\n}</code></pre><p>القيم المطبوعة 0 ثم 1 ثم 2. عندما يصبح i يساوي 3 يفشل الشرط. لاحظ أن &lt;3 لا تشمل 3.</p>"
      },
      {
        "title": "جدول تتبع صغير",
        "html": "<p>في المثال السابق: بداية i=0، اختبار 0&lt;3، طباعة، ثم i++ تجعلها 1. كرّر نفس الأسئلة. في كل دورة اسأل: ما قيمة العداد الآن؟ ما الذي تغيّر؟ متى سأتوقف؟ بهذه الطريقة تفهم الكود بدل حفظ شكل الحلقة.</p>"
      },
      {
        "title": "المجمّع والعداد",
        "html": "<pre class=\"language-java\"><code>int sum = 0;\nint count = 0;\nfor (int n = 1; n &lt;= 5; n++) {\n    sum += n;\n    if (n % 2 == 0) count++;\n}\nSystem.out.println(sum);\nSystem.out.println(count);</code></pre><p>sum يجمع القيم فيصير 15. count يعدّ الأعداد الزوجية فيصير 2. تهيئتهما قبل الحلقة تحافظ على النتيجة؛ إذا جعلت sum=0 داخل الحلقة سيُمسح المجموع كل مرة.</p>"
      },
      {
        "title": "while وdo while وbreak",
        "html": "<pre class=\"language-java\"><code>int n = 3;\nwhile (n &gt; 0) {\n    System.out.println(n);\n    n--;\n}</code></pre><p>while تفحص الشرط قبل الجسم؛ ربما تنفّذ صفر مرة. do while تفحص بعد الجسم؛ تنفذ مرة على الأقل. <code>break</code> يخرج من أقرب حلقة. <code>continue</code> يتجاوز بقية الدورة وينتقل للتالية. الحلقة المتداخلة تشغّل الداخلية كاملة لكل دورة خارجية.</p>"
      },
      {
        "title": "خطأ شائع يمكنك كشفه",
        "html": "<p>لو نسيت n-- فالشرط يبقى صحيحًا. أوقف التنفيذ وأعد تحديث العداد. لو كتبت i &lt;= length للوصول للمصفوفة فستصل خانة إضافية؛ الحد الصحيح عادةً i &lt; length. عدّل البرنامج ليطبع المجموع بعد كل دورة، وسترى كيف ينمو.</p>"
      }
    ],
    "starter": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int n = 1; n <= 5; n++) {\n            sum += n;\n        }\n        System.out.println(sum);\n    }\n}\n",
    "expectedOutput": "15",
    "challenge": "<p>استخدم for لحساب مجموع الأعداد الزوجية من 1 إلى 10 شاملًا. النتيجة 30. ممنوع كتابة الجمع جاهزًا أو طباعة 30 مباشرة.</p>",
    "hints": [
      "ابدأ sum=0 قبل الحلقة.",
      "العدد زوجي إذا n % 2 == 0.",
      "ضع sum += n داخل if داخل الحلقة."
    ],
    "solution": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int n = 1; n <= 10; n++) {\n            if (n % 2 == 0) sum += n;\n        }\n        System.out.println(sum);\n    }\n}\n",
    "quiz": [
      {
        "question": "كم مرة تعمل for(int i=0;i<4;i++)؟",
        "choices": [
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "explanation": "i يأخذ القيم 0 و1 و2 و3."
      },
      {
        "question": "أين نهيئ sum قبل الجمع المتكرر؟",
        "choices": [
          "قبل الحلقة",
          "داخل الحلقة في كل دورة",
          "بعد الطباعة"
        ],
        "answer": 0,
        "explanation": "إعادة تهيئته داخل الحلقة تمحو المجموع السابق."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "methods",
    "phase": "foundation",
    "title": "الدوال · مهمة واحدة باسم",
    "shortTitle": "الدوال",
    "minutes": 16,
    "summary": "نفهم المدخلات، return، وسبب ظهور static.",
    "source": "مراجعة تمهيدية لـ Java 1 (أُعدّت لهذا الموقع، وليست نقلاً من سلايدات CS113)؛ 1- Objects and methods/W1_Lec_3&W2_Lec_1-Ch1-1_Objects And Methods.pptx، الشرائح 2–12",
    "objectives": [
      "تعريف دالة واستدعاؤها",
      "تمييز parameter وargument وreturn",
      "تمييز overloading عن تكرار الاسم بلا اختلاف"
    ],
    "sections": [
      {
        "title": "الدالة مثل آلة صغيرة",
        "html": "<p>تعطيها مدخلًا فتؤدي مهمة، وربما ترجع نتيجة. الدالة تقلّل التكرار وتساعدك تختبر كل جزء منفصلًا. اسم الدالة مع المدخلات ونوع النتيجة يسمى هنا رأس الدالة.</p><pre class=\"language-java\"><code>static int square(int n) {\n    return n * n;\n}</code></pre><p>int قبل الاسم نوع النتيجة. square الاسم. <code>int n</code> متغير يستقبل المدخل. return يعيد النتيجة ويخرج من الدالة.</p>"
      },
      {
        "title": "الاستدعاء غير التعريف",
        "html": "<pre class=\"language-java\"><code>int result = square(4);\nSystem.out.println(result);</code></pre><p>4 هي argument، أي القيمة المرسلة. n هو parameter، أي الاسم داخل الدالة. عند الاستدعاء n=4، فترجع 16 وتوضع في result. تعريف الدالة وحده لا ينفذها. نكتب الدالة داخل class ولكن خارج main.</p>"
      },
      {
        "title": "void وreturn والنطاق",
        "html": "<pre class=\"language-java\"><code>static void greet(String name) {\n    System.out.println(&quot;Hello &quot; + name);\n}</code></pre><p>void تعني لا توجد قيمة ترجع للمستدعي. الطباعة لا تساوي return: قد ترجع دالة رقمًا دون أن تطبعه. المتغير المحلي يعيش داخل القوس الذي عُرّف فيه. لا يمكن لدالة أخرى رؤية n مباشرة إلا إذا مررتها لها أو كانت field في الكلاس.</p>"
      },
      {
        "title": "static وoverloading",
        "html": "<p>نستخدم static في أدوات main البسيطة لأنها تستدعى دون كائن. لاحقًا دوال الطالب أو الجهاز ستعمل على كائن محدد. لا تضف static عشوائيًا لإسكات كل خطأ.</p><pre class=\"language-java\"><code>static int add(int a, int b) { return a + b; }\nstatic double add(double a, double b) { return a + b; }</code></pre><p>هذا overloading: نفس الاسم ومدخلات مختلفة بالنوع أو العدد. تغيير نوع الإرجاع وحده لا يكفي. المترجم يختار النسخة من أنواع المدخلات.</p>"
      },
      {
        "title": "امشِ مع البيانات",
        "html": "<p>ضع breakpoint ذهنيًا عند استدعاء square(4): اقفز لتعريف square، بدّل n بـ4، احسب return، ثم ارجع لمكان الاستدعاء. جرّب square(-3)، النتيجة 9. جرّب استدعاءها مرتين بقيم مختلفة؛ لكل استدعاء متغيره المحلي.</p>"
      }
    ],
    "starter": "public class Main {\n    static int square(int n) {\n        return n * n;\n    }\n    public static void main(String[] args) {\n        int result = square(4);\n        System.out.println(result);\n    }\n}\n",
    "expectedOutput": "16",
    "challenge": "<p>اكتب دالة <code>static double average(int a, int b)</code> ترجع متوسط عددين. استدعها من main بالقيمتين 5 و8، واطبع 6.5.</p>",
    "hints": [
      "اكتب الدالة خارج main وداخل Main.",
      "تحتاج return وليس الطباعة داخل الدالة فقط.",
      "return (a + b) / 2.0;"
    ],
    "solution": "public class Main {\n    static double average(int a, int b) {\n        return (a + b) / 2.0;\n    }\n    public static void main(String[] args) {\n        System.out.println(average(5, 8));\n    }\n}\n",
    "quiz": [
      {
        "question": "ما وظيفة return؟",
        "choices": [
          "تطبع دائمًا",
          "ترجع قيمة وتخرج من الدالة",
          "تكرر الدالة"
        ],
        "answer": 1,
        "explanation": "الطباعة تحتاج System.out؛ return ترسل النتيجة للمستدعي."
      },
      {
        "question": "هل اختلاف return type وحده يصنع overloading؟",
        "choices": [
          "نعم",
          "لا"
        ],
        "answer": 1,
        "explanation": "يجب اختلاف قائمة أنواع أو عدد المدخلات."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "arrays",
    "phase": "foundation",
    "title": "المصفوفات · الخانة تبدأ من صفر",
    "shortTitle": "المصفوفات",
    "minutes": 17,
    "summary": "نبحث ونجمع ونجد الأكبر، ونفصل السعة عن عدد العناصر.",
    "source": "مراجعة تمهيدية لـ Java 1 (أُعدّت لهذا الموقع، وليست نقلاً من سلايدات CS113)؛ 1- Objects and methods/W2_Lec_2_3-Ch1-2_Arrays of Objects.pptx، الشرائح 2–6",
    "objectives": [
      "إنشاء مصفوفة وفهم length",
      "تجنب تجاوز الحدود",
      "تنفيذ sum وmax وsearch"
    ],
    "sections": [
      {
        "title": "صف خزائن مرقّم",
        "html": "<p>المصفوفة تجمع عدة قيم من النوع نفسه. <code>int[] marks = {70, 90, 80};</code> ثلاث خانات. marks[0]=70 وmarks[2]=80. <code>marks.length</code> عدد الخانات وهو 3، وآخر فهرس 2. length للمصفوفة بلا أقواس؛ length() للنص بأقواس.</p><pre class=\"language-java\"><code>int[] marks = new int[3];\nmarks[0] = 70;\nmarks[1] = 90;\nmarks[2] = 80;</code></pre>"
      },
      {
        "title": "اجمع ومر على كل خانة",
        "html": "<pre class=\"language-java\"><code>int sum = 0;\nfor (int i = 0; i &lt; marks.length; i++) {\n    sum += marks[i];\n}\ndouble avg = (double) sum / marks.length;</code></pre><p>i هو رقم الخانة، وmarks[i] قيمتها. لا تخلط الاثنين. <code>for(int mark : marks)</code> يمر على القيم إذا لم تحتج الفهرس. المصفوفة الجديدة من int قيمها 0، ومن boolean false، ومن الكائنات null.</p>"
      },
      {
        "title": "الأكبر والبحث",
        "html": "<pre class=\"language-java\"><code>int max = marks[0];\nfor (int i = 1; i &lt; marks.length; i++) {\n    if (marks[i] &gt; max) max = marks[i];\n}</code></pre><p>نبدأ من أول عنصر فعلي ثم نقارنه بالبقية. البدء بصفر يعطي خطأ لو كانت القيم كلها سالبة. هذا الكود يتطلب مصفوفة غير فارغة. البحث يمر على القيم ويعيد فهرس المطابقة؛ يعيد -1 بعد انتهاء الحلقة إذا لم يجد.</p>"
      },
      {
        "title": "السعة ليست العدد المستخدم",
        "html": "<p>لو حجزت 10 خانات ووضعت طالبين فقط، فالسعة 10 والعدد count=2. مرّ على <code>i &lt; count</code> عند حساب بيانات الموجودين. هذا التفصيل أساس المدير في اختبارات اللاب.</p><pre class=\"language-java\"><code>int[] values = new int[10];\nint count = 0;\nvalues[count] = 40;\ncount++;</code></pre><p>مصفوفة ثنائية الأبعاد تُكتب int[][] وتقرأ table[row][column]، ويمكن المرور عليها بحلقتين. الحجم ثابت لكل مصفوفة بعد new.</p>"
      },
      {
        "title": "توقّع واكسر المثال عمدًا",
        "html": "<p>غيّر القيم إلى {-7,-2,-9} وتوقّع max=-2. بعده جرّب marks[marks.length]؛ ستظهر ArrayIndexOutOfBoundsException لأنك طلبت الخانة التالية للأخيرة. أعد الكود الصحيح. التعلّم من خطأ صغير هنا أفضل من اكتشافه أول مرة في الاختبار.</p>"
      }
    ],
    "starter": "public class Main {\n    public static void main(String[] args) {\n        int[] marks = {70, 90, 80};\n        int max = marks[0];\n        for (int i = 1; i < marks.length; i++) {\n            if (marks[i] > max) max = marks[i];\n        }\n        System.out.println(max);\n    }\n}\n",
    "expectedOutput": "90",
    "challenge": "<p>اكتب دالة <code>static int find(int[] values, int target)</code> ترجع فهرس أول قيمة مطابقة أو -1. جرّب {4,9,2,9} مع 9 ثم 7؛ الناتج سطران 1 ثم -1.</p>",
    "hints": [
      "مرّ من صفر إلى ما قبل length.",
      "إذا values[i] == target أعد i.",
      "ضع return -1 بعد الحلقة حتى لا تتوقف عند أول قيمة مختلفة."
    ],
    "solution": "public class Main {\n    static int find(int[] values, int target) {\n        for (int i = 0; i < values.length; i++) {\n            if (values[i] == target) return i;\n        }\n        return -1;\n    }\n    public static void main(String[] args) {\n        int[] a = {4, 9, 2, 9};\n        System.out.println(find(a, 9));\n        System.out.println(find(a, 7));\n    }\n}\n",
    "quiz": [
      {
        "question": "آخر فهرس لمصفوفة طولها 5؟",
        "choices": [
          "5",
          "4",
          "6"
        ],
        "answer": 1,
        "explanation": "الفهارس 0 إلى 4."
      },
      {
        "question": "لماذا return -1 بعد حلقة البحث؟",
        "choices": [
          "حتى نفحص كل العناصر قبل الحكم",
          "لأنه لا يجوز return داخل حلقة",
          "لتكبير المصفوفة"
        ],
        "answer": 0,
        "explanation": "يجوز return عند إيجاد المطابقة؛ عدم الوجود لا نقرره إلا بعد فحص الجميع."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "objects",
    "phase": "oop",
    "title": "الكلاس والكائن · قالب ونسخة",
    "shortTitle": "الكلاس والكائن",
    "minutes": 17,
    "summary": "نحط البيانات والتصرفات مع بعض، ثم نصنع أكثر من كائن.",
    "source": "1- Objects and methods/W1_Lec_3&W2_Lec_1-Ch1-1_Objects And Methods.pptx، الشرائح 2–12",
    "objectives": [
      "تمييز class عن object",
      "تعريف fields وmethods",
      "إنشاء كائن واستدعاء دواله"
    ],
    "sections": [
      {
        "title": "القالب والنسخة",
        "html": "<p>تخيّل استمارة طالب فارغة؛ هذا class. عندما تملأ استمارة باسم وعمر معيّن يصبح عندك object. كلاس Student يصف أي طالب، و<code>new Student()</code> يصنع طالبًا محددًا. الكائن يجمع حالة state مثل الاسم، وتصرف behavior مثل إرجاع معلوماته.</p>"
      },
      {
        "title": "بيانات الكائن ودواله",
        "html": "<pre class=\"language-java\"><code>class Student {\n    private String name;\n    private int age;\n    public void setName(String value) { name = value; }\n    public String getName() { return name; }\n}</code></pre><p>المتغير داخل الكلاس وخارج الدوال يسمى field أو attribute. كل كائن له name مستقل. private يحصر الوصول المباشر داخل الكلاس. دالة setName تغيّر اسم هذا الكائن، وgetName ترجع الاسم.</p>"
      },
      {
        "title": "كيف نستخدمه؟",
        "html": "<pre class=\"language-java\"><code>Student a = new Student();\na.setName(&quot;Ali&quot;);\nStudent b = new Student();\nb.setName(&quot;Sara&quot;);\nSystem.out.println(a.getName());</code></pre><p>الطرف الأيسر يعلن متغيرًا نوعه Student اسمه a. الطرف الأيمن يصنع الكائن. النقطة معناها اطلب من الكائن المذكور تنفيذ الدالة. تغيير b لا يغير a لأننا استخدمنا new مرتين.</p>"
      },
      {
        "title": "أين أكتب الكلاسات؟",
        "html": "<p>في محرر التدريب نضع class Student ثم public class Main في ملف واحد. public class واحدة هنا واسمها Main. في Eclipse يمكنك إنشاء Student.java فيه public class Student، وMain.java فيه public class Main. نفس الفكرة ونفس Java، الاختلاف تنظيم الملفات.</p><p>لا تضع تعريف Student داخل main. ولا تحاول استخدام name من Main إذا كان private. استدع getName. كلمة null تعني أن المرجع لا يشير إلى كائن؛ استدعاء دالة منه يسبب خطأ.</p>"
      },
      {
        "title": "توقّع وغيّر",
        "html": "<p>غيّر اسم a إلى Omar بعد إنشاء b. قبل التشغيل توقّع سطر كل كائن. بعدها احذف new من تعريف كائن وحاول استخدامه؛ ستعرف لماذا التصريح بمتغير وحده لا يصنع طالبًا. أعده للحالة الصحيحة.</p>"
      }
    ],
    "starter": "class Student {\n    private String name;\n    public void setName(String value) { name = value; }\n    public String getName() { return name; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student a = new Student();\n        Student b = new Student();\n        a.setName(\"Ali\");\n        b.setName(\"Sara\");\n        System.out.println(a.getName());\n        System.out.println(b.getName());\n    }\n}\n",
    "expectedOutput": "Ali\nSara",
    "challenge": "<p>اكتب class Box له private double width، ودالتان setWidth وgetWidth ودالة area ترجع width * width. أنشئ صندوقين عرضهما 3 و5 واطبع مساحتيهما 9.0 و25.0.</p>",
    "hints": [
      "عرّف width خارج الدوال داخل Box.",
      "area نوع إرجاعها double ولا تحتاج parameter.",
      "اصنع b1 وb2 باستخدام new ثم استدع setWidth لكل منهما."
    ],
    "solution": "class Box {\n    private double width;\n    public void setWidth(double value) { width = value; }\n    public double getWidth() { return width; }\n    public double area() { return width * width; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Box b1 = new Box();\n        Box b2 = new Box();\n        b1.setWidth(3);\n        b2.setWidth(5);\n        System.out.println(b1.area());\n        System.out.println(b2.area());\n    }\n}\n",
    "quiz": [
      {
        "question": "ما الذي يصنع كائنًا؟",
        "choices": [
          "Student s;",
          "new Student()",
          "class Student"
        ],
        "answer": 1,
        "explanation": "التصريح يحدد النوع والاسم، أما new فينشئ الكائن."
      },
      {
        "question": "ما معنى private للحقل؟",
        "choices": [
          "لا يمكن استخدامه أبدًا",
          "يمكن للكلاس نفسه الوصول إليه مباشرة",
          "كل الكلاسات تصل إليه"
        ],
        "answer": 1,
        "explanation": "نوفّر وصولًا مضبوطًا لبقية الكلاسات عبر methods عامة."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "constructors",
    "phase": "oop",
    "title": "المنشئ وthis وstatic والتغليف",
    "shortTitle": "المنشئ وthis وstatic والتغليف",
    "minutes": 19,
    "summary": "كل كائن يبدأ بحالة صحيحة، وكل حقل له مكان واضح.",
    "source": "1- Objects and methods/W1_Lec_3&W2_Lec_1-Ch1-1_Objects And Methods.pptx، الشرائح 23–38",
    "objectives": [
      "كتابة constructor بلا return type",
      "استخدام this وفهم constructor overloading",
      "تمييز الحقل العادي عن static"
    ],
    "sections": [
      {
        "title": "المنشئ أول تجهيز للكائن",
        "html": "<pre class=\"language-java\"><code>class Student {\n    private String name;\n    private int age;\n    public Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}</code></pre><p>المنشئ constructor اسمه مطابق للكلاس، وليس له نوع إرجاع حتى void. ينفذ عندما تكتب new Student(\"Ali\",20). وظيفته إعطاء الكائن قيم البداية.</p>"
      },
      {
        "title": "this هو الكائن الحالي",
        "html": "<p>في <code>this.name = name;</code> اليسار حقل الكائن واليمين المدخل. لو كتبت <code>name = name;</code> وأنت تستخدم نفس الاسم، فأنت تسند المدخل إلى نفسه وتترك الحقل بلا تغيير. يمكنك أيضًا تسمية المدخل n، لكن this أوضح مع تطابق الأسماء.</p>"
      },
      {
        "title": "أكثر من منشئ",
        "html": "<pre class=\"language-java\"><code>public Student() {\n    this(&quot;Unknown&quot;, 0);\n}\npublic Student(String name, int age) {\n    this.name = name;\n    setAge(age);\n}\npublic void setAge(int age) {\n    if (age &lt; 0) throw new IllegalArgumentException(&quot;Negative age&quot;);\n    this.age = age;\n}</code></pre><p><code>this(...)</code> يستدعي منشئًا آخر في نفس الكلاس، ونكتبه أول سطر هنا. إذا لم تكتب أي constructor، يوفّر Java واحدًا بلا مدخلات. إذا كتبت constructor بمدخلات فلن يضاف تلقائيًا constructor بلا مدخلات. throw سنشرحه لاحقًا؛ معناه رفض قيمة غير مقبولة.</p>"
      },
      {
        "title": "التغليف وstatic وfinal",
        "html": "<p>Encapsulation يعني جعل البيانات داخل الكلاس مع دوال تحكم الوصول إليها. setter مكان مناسب للتحقق. getter يعيد القيمة. <code>static</code> حقل واحد مشترك للكلاس، بينما الحقل العادي نسخة لكل object.</p><pre class=\"language-java\"><code>private static int created = 0;\npublic static int getCreated() { return created; }\n// inside each main constructor:\n// created++;\nstatic final int MAX_SIZE = 100;</code></pre><p>final يمنع إعادة الإسناد بعد التهيئة. <code>static final</code> مناسب لثابت مشترك. ننادي الدالة المشتركة بـ Student.getCreated(). لا تجعل age static؛ وإلا سيتشارك الطلاب العمر نفسه.</p>"
      },
      {
        "title": "جرّب تشخيص منشئ",
        "html": "<p>جرّب إضافة void قبل Student في المثال. ستصبح method عادية ويختفي المنشئ المقصود، فيفشل new بمدخلات. أزل void. غيّر age إلى قيمة أخرى وتأكد أن الكائن الثاني يحتفظ بعمره. معيار الفهم أنك تشرح لماذا this موجودة.</p>"
      }
    ],
    "starter": "class Student {\n    private String name;\n    private int age;\n    private static int created = 0;\n    public Student() { this(\"Unknown\", 0); }\n    public Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n        created++;\n    }\n    public String getName() { return name; }\n    public int getAge() { return age; }\n    public static int getCreated() { return created; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student a = new Student(\"Ali\", 20);\n        Student b = new Student();\n        System.out.println(a.getName() + \" \" + a.getAge());\n        System.out.println(Student.getCreated());\n    }\n}\n",
    "expectedOutput": "Ali 20\n2",
    "challenge": "<p>اكتب Product بحقلين private: name وprice. منشئ بمدخلين ومنشئ بلا مدخلات يجعل الاسم Unknown والسعر 0. أضف getPrice وsetPrice الذي يرفض السالب بـ IllegalArgumentException. اختبر منتجًا سعره 25 ثم غيّره إلى 30.</p>",
    "hints": [
      "المنشئ دون مدخلات يستطيع استدعاء this(\"Unknown\", 0).",
      "استخدم setPrice من المنشئ أيضًا ليشترك مسارا الإنشاء والتعديل في التحقق.",
      "if (!Double.isFinite(price) || price < 0) throw new IllegalArgumentException(\"Invalid price\");"
    ],
    "solution": "class Product {\n    private String name;\n    private double price;\n    public Product() { this(\"Unknown\", 0); }\n    public Product(String name, double price) {\n        this.name = name;\n        setPrice(price);\n    }\n    public double getPrice() { return price; }\n    public void setPrice(double price) {\n        if (!Double.isFinite(price) || price < 0) throw new IllegalArgumentException(\"Invalid price\");\n        this.price = price;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Product p = new Product(\"Book\", 25);\n        System.out.println(p.getPrice());\n        p.setPrice(30);\n        System.out.println(p.getPrice());\n    }\n}\n",
    "quiz": [
      {
        "question": "إذا كتبت منشئًا بمدخلات فقط، هل new Student() صالح؟",
        "choices": [
          "نعم دائمًا",
          "لا، إلا إذا أضفت منشئًا بلا مدخلات",
          "نعم إذا الكلاس public"
        ],
        "answer": 1,
        "explanation": "المنشئ الافتراضي لا يضاف إن عرّفت أي constructor."
      },
      {
        "question": "العمر يختلف لكل طالب، لذلك age…",
        "choices": [
          "static",
          "حقل عادي لكل كائن",
          "final static دائمًا"
        ],
        "answer": 1,
        "explanation": "static مشترك بين الكائنات كلها."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "references",
    "phase": "oop",
    "title": "المراجع والنسخ وtoString وequals",
    "shortTitle": "المراجع والنسخ وtoString وequals",
    "minutes": 21,
    "summary": "أكثر أخطاء الكائنات تأتي من الخلط بين اسم الشيء والشيء نفسه.",
    "source": "1- Objects and methods/W1_Lec_3&W2_Lec_1-Ch1-1_Objects And Methods.pptx، الشرائح 8–22؛ 1- Objects and methods/W2_Lec_2_3-Ch1-2_Arrays of Objects.pptx، الشرائح 3، 9–10",
    "objectives": [
      "فهم alias والنسخ المستقل",
      "كتابة copy constructor وtoString",
      "تمييز equals overload من override"
    ],
    "sections": [
      {
        "title": "المرجع عنوان وصول",
        "html": "<p><code>Student b = a;</code> ينسخ المرجع إلى نفس الكائن؛ لا يصنع طالبًا جديدًا. تخيّل مفتاحين لنفس الصندوق. إذا عدلت محتوى الصندوق باستخدام b ستراه عبر a أيضًا. أما <code>new Student(a)</code> فيستدعي منشئ نسخ نكتبه نحن ليصنع كائنًا مستقلًا.</p>"
      },
      {
        "title": "التمرير في Java بالقيمة دائمًا",
        "html": "<p>عندما ترسل int تنسخ قيمته العددية. عندما ترسل كائنًا تنسخ قيمة المرجع؛ لذلك الدالة تستطيع تعديل الكائن المشار إليه، لكن إعادة تعيين parameter إلى new لا تعيد تعيين متغير المستدعي.</p><pre class=\"language-java\"><code>static void change(Student s) { s.setAge(30); }\nstatic void replace(Student s) { s = new Student(99); }</code></pre><p>change يغير الكائن المشترك. replace يغير المرجع المحلي s فقط. هذه دقة مهمة لفهم أمثلة السلايدات التي تقول «تمرير مرجع».</p>"
      },
      {
        "title": "نسخة سطحية ونسخة مستقلة",
        "html": "<pre class=\"language-java\"><code>public Student(Student other) {\n    this.age = other.age;\n}</code></pre><p>هذا ينسخ الحقول العددية. إذا كان الحقل مصفوفة mutable، فإن <code>this.marks = other.marks;</code> يبقي المصفوفة مشتركة. لإنشاء مصفوفة مستقلة استخدم <code>other.marks.clone()</code> للأعداد. clone لمصفوفة كائنات ينسخ المراجع فقط؛ تحتاج نسخ كل كائن إذا اشترط السؤال نسخة مستقلة من الأجزاء؛ composition وصف للملكية ويمكن تنفيذها أيضًا بإنشاء الأجزاء داخل المالك. String ثابت المحتوى فلا يلزم new String لنسخة مستقلة وظيفيًا.</p>"
      },
      {
        "title": "toString وequals بالتوقيع الصحيح",
        "html": "<pre class=\"language-java\"><code>@Override\npublic String toString() { return &quot;Age=&quot; + age; }\n@Override\npublic boolean equals(Object obj) {\n    if (this == obj) return true;\n    if (!(obj instanceof Student)) return false;\n    Student other = (Student) obj;\n    return age == other.age;\n}\n@Override\npublic int hashCode() { return Integer.hashCode(age); }</code></pre><p><code>instanceof Student</code> يتحقق من نوع الكائن الفعلي، و<code>(Student) obj</code> تحويل مرجعه إلى Student بعد التحقق. سنفصل التحويل في درس تعدد الأشكال. toString يرجع وصفًا يطبع تلقائيًا مع println(object). <code>equals(Object)</code> يعيد تعريف method من Object؛ نقارن الحقول التي تحدد التساوي. إن أعيد تعريف equals نعيد hashCode بما يتفق معه، خصوصًا للمجموعات.</p><p>لو السؤال يطلب <code>equals(Device d)</code> حرفيًا، فهذا overload مختلف عن equals(Object)، فلا تضع @Override على الإعلان الأول في الأب لهذا السبب. أما إذا أعاد الابن تعريف equals(Device) الموروثة بنفس التوقيع، فـ @Override صحيحة ومفيدة. نفذ التوقيع المطلوب وافهم الفرق. == يسأل هل هما الكائن نفسه، وequals يسأل عن تعريفك لتساوي المحتوى.</p>"
      },
      {
        "title": "توقّع قبل التجربة",
        "html": "<p>في المثال a وb نفس الكائن، وc نسخة مستقلة. بعد b.setAge(30) سيصبح a=30 وc=20. غيّر c أيضًا وتحقق أن a لا يتأثر. هذا الاختبار الصغير يكشف خطأ النسخ أفضل من النظر للكود فقط.</p>"
      }
    ],
    "starter": "class Student {\n    private int age;\n    public Student(int age) { this.age = age; }\n    public Student(Student other) { this.age = other.age; }\n    public void setAge(int age) { this.age = age; }\n    public String toString() { return \"Age=\" + age; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student a = new Student(20);\n        Student b = a;\n        Student c = new Student(a);\n        b.setAge(30);\n        System.out.println(a);\n        System.out.println(c);\n        System.out.println(a == b);\n        System.out.println(a == c);\n    }\n}\n",
    "expectedOutput": "Age=30\nAge=20\ntrue\nfalse",
    "challenge": "<p>اكتب Box بحقل int[] values، منشئ يأخذ مصفوفة وينسخها، ومنشئ نسخ، وsetFirst وtoString. أنشئ a بقيم {1,2} ثم b نسخة منه. عدّل b إلى 99؛ اطبع a وb لإثبات استقلالهما.</p>",
    "hints": [
      "نسخ المرجع وحده لا يكفي لمصفوفة mutable.",
      "استخدم values.clone() أو حلقة نسخ عناصر int.",
      "منشئ النسخ يستطيع استدعاء this(other.values)."
    ],
    "solution": "import java.util.Arrays;\nclass Box {\n    private int[] values;\n    public Box(int[] values) { this.values = values.clone(); }\n    public Box(Box other) { this(other.values); }\n    public void setFirst(int value) { values[0] = value; }\n    public String toString() { return Arrays.toString(values); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Box a = new Box(new int[]{1, 2});\n        Box b = new Box(a);\n        b.setFirst(99);\n        System.out.println(a);\n        System.out.println(b);\n    }\n}\n",
    "quiz": [
      {
        "question": "بعد B b = a; كم كائنًا جديدًا أنشأنا؟",
        "choices": [
          "واحد",
          "صفر",
          "اثنين"
        ],
        "answer": 1,
        "explanation": "الإسناد ينسخ المرجع، والكائن الجديد يحتاج new."
      },
      {
        "question": "هل boolean equals(Device d) يعيد تعريف Object.equals؟",
        "choices": [
          "نعم",
          "لا، لأنه ليس equals(Object)",
          "فقط إذا Device abstract"
        ],
        "answer": 1,
        "explanation": "نوع المدخل جزء من التوقيع؛ هذه زيادة تحميل overload."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "object-arrays",
    "phase": "oop",
    "title": "مدير مصفوفة كائنات · إضافة وبحث وحذف",
    "shortTitle": "مدير مصفوفة كائنات",
    "minutes": 26,
    "summary": "هذا قلب نمط الاختبارات: سعة ثابتة وcount وتحكم مضبوط.",
    "source": "1- Objects and methods/W2_Lec_2_3-Ch1-2_Arrays of Objects.pptx، الشرائح 9–18",
    "objectives": [
      "إدارة count والسعة",
      "تنفيذ إضافة وبحث وحذف",
      "عدم لمس خانات null"
    ],
    "sections": [
      {
        "title": "new Student[5] لا يصنع خمسة طلاب",
        "html": "<p>هو يصنع خمسة أماكن لمراجع؛ كل مكان يبدأ null. اصنع كائنات الطلاب وحدها. مدير مثل Section يملك Student[] students وint count. القاعدة التي نحافظ عليها: الخانات من 0 إلى count-1 فيها كائنات، والبقية فارغة.</p>"
      },
      {
        "title": "الإضافة والبحث",
        "html": "<pre class=\"language-java\"><code>public boolean add(Student s) {\n    if (s == null || count == students.length) return false;\n    students[count] = s;\n    count++;\n    return true;\n}\npublic int find(String name) {\n    for (int i = 0; i &lt; count; i++) {\n        if (students[i].getName().equals(name)) return i;\n    }\n    return -1;\n}</code></pre><p>نرفض الإضافة إذا امتلأت المصفوفة، ونزيد count بعد نجاح الإضافة فقط. البحث يمر حتى count لأن بقية الخانات null. لا ترجع false أو -1 داخل أول اختلاف؛ قد تكون المطابقة لاحقًا.</p>"
      },
      {
        "title": "الحذف مع الحفاظ على الترتيب",
        "html": "<pre class=\"language-java\"><code>public boolean remove(String name) {\n    int index = find(name);\n    if (index == -1) return false;\n    for (int i = index; i &lt; count - 1; i++) {\n        students[i] = students[i + 1];\n    }\n    count--;\n    students[count] = null;\n    return true;\n}</code></pre><p>بعد العثور على الطالب، نسحب كل من بعده خانة إلى اليسار ثم ننقص count ونمسح المرجع المكرر في النهاية. بديل أسرع إن كان الترتيب غير مهم: ضع العنصر الأخير مكان المحذوف ثم أنقص العدد. لا تترك فجوة وسط الجزء المستخدم بلا تغيير طريقة المرور.</p>"
      },
      {
        "title": "الأكبر أو مجموع نوع معين",
        "html": "<p>لحساب المجموع ابدأ 0 ومر حتى count. لإرجاع أكبر كائن، إذا count=0 أعد null أو الاستثناء المحدد في السؤال؛ وإلا best=students[0] وقارن الحقل المطلوب. انتبه: السؤال قد يريد كائن Student لا رقم العمر. اقرأ نوع الإرجاع قبل كتابة الجسم.</p><p>في أمثلة النسخ في المقرر، نحمي الأجزاء المملوكة بإنشاء نسخ مستقلة عند الإضافة. composition تصف الملكية ودورة الحياة ضمن التصميم؛ لا تفرض Java قاعدة نسخ تلقائية. وقد ينشئ الكل الجزء داخليًا. في مثال aggregation هنا نحتفظ بالمرجع. سنفصل الرسم في الدرس التالي.</p>"
      },
      {
        "title": "اختبار يثبت أن المدير يعمل",
        "html": "<p>جرّب: إضافة أول عنصر، ملء السعة، محاولة عنصر زائد، بحث موجود وغير موجود، حذف أول ووسط وآخر عنصر، حذف من قائمة فارغة. بعد الحذف أضف عنصرًا جديدًا. راقب count؛ هذه حالات بسيطة تكشف أغلب أخطاء اللاب.</p>"
      }
    ],
    "starter": "class Student {\n    private String name;\n    public Student(String name) { this.name = name; }\n    public String getName() { return name; }\n}\nclass Section {\n    private Student[] students;\n    private int count;\n    public Section(int size) { students = new Student[size]; }\n    public boolean add(Student s) {\n        if (s == null || count == students.length) return false;\n        students[count++] = s;\n        return true;\n    }\n    public int find(String name) {\n        for (int i = 0; i < count; i++) {\n            if (students[i].getName().equals(name)) return i;\n        }\n        return -1;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Section s = new Section(2);\n        System.out.println(s.add(new Student(\"Ali\")));\n        System.out.println(s.add(new Student(\"Sara\")));\n        System.out.println(s.add(new Student(\"Omar\")));\n        System.out.println(s.find(\"Sara\"));\n    }\n}\n",
    "expectedOutput": "true\ntrue\nfalse\n1",
    "challenge": "<p>وسّع Section بإضافة remove(String name) تحافظ على الترتيب وgetCount(). احذف Ali، ثم أضف Omar. يجب أن تجد Sara عند 0 وOmar عند 1 وcount=2.</p>",
    "hints": [
      "ابحث عن index أولًا وارجع false إذا كان -1.",
      "حرّك العناصر من index إلى count-2؛ كل خانة تأخذ التالية.",
      "أنقص count ثم students[count]=null."
    ],
    "solution": "class Student {\n    private String name;\n    public Student(String name) { this.name = name; }\n    public String getName() { return name; }\n}\nclass Section {\n    private Student[] students;\n    private int count;\n    public Section(int size) { students = new Student[size]; }\n    public boolean add(Student s) {\n        if (s == null || count == students.length) return false;\n        students[count++] = s;\n        return true;\n    }\n    public int find(String name) {\n        for (int i = 0; i < count; i++)\n            if (students[i].getName().equals(name)) return i;\n        return -1;\n    }\n    public boolean remove(String name) {\n        int index = find(name);\n        if (index == -1) return false;\n        for (int i = index; i < count - 1; i++) students[i] = students[i + 1];\n        students[--count] = null;\n        return true;\n    }\n    public int getCount() { return count; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Section s = new Section(2);\n        s.add(new Student(\"Ali\"));\n        s.add(new Student(\"Sara\"));\n        s.remove(\"Ali\");\n        s.add(new Student(\"Omar\"));\n        System.out.println(s.find(\"Sara\"));\n        System.out.println(s.find(\"Omar\"));\n        System.out.println(s.getCount());\n    }\n}\n",
    "quiz": [
      {
        "question": "سعة المصفوفة 10 وفيها 3 عناصر، نمر حتى…",
        "choices": [
          "i < 10 دائمًا",
          "i < count وهو 3",
          "i <= count"
        ],
        "answer": 1,
        "explanation": "باقي الخانات null وفق قاعدة المدير."
      },
      {
        "question": "هل students = new Student[5] ينشئ الطلاب؟",
        "choices": [
          "نعم",
          "لا، ينشئ مصفوفة مراجع فقط"
        ],
        "answer": 1,
        "explanation": "كل خانة تبدأ null وتحتاج كائنًا يُسند إليها."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "uml",
    "phase": "oop",
    "title": "UML والعلاقات · ترجمة الرسم إلى Java",
    "shortTitle": "UML والعلاقات",
    "minutes": 22,
    "summary": "اقرأ المربّع والسهم والمعين ثم حوّلها إلى fields وextends.",
    "source": "1- Objects and methods/W3_Lec_2_Lec_3-Ch 2_Relationship between classes using UML_UPDATED.pptx، الشرائح 1–27؛ extra/Composition and Aggregation.pptx",
    "objectives": [
      "قراءة visibility والأنواع والتواقيع",
      "تمييز is-a وhas-a",
      "تنفيذ aggregation وcomposition"
    ],
    "sections": [
      {
        "title": "المربع ثلاث طبقات",
        "html": "<p>UML لغة رسم لتلخيص تصميم الكلاسات. المربع يعرض اسم الكلاس في الأعلى، الحقول في الوسط، والدوال في الأسفل. لا يحتاج منك رسمًا فنيًا؛ فقط فك الرموز واحدًا واحدًا.</p><pre><code>Student\n- name : String\n- age : int\n+ Student(name : String, age : int)\n+ getAge() : int\n+ setAge(age : int) : void</code></pre><p>ترجمتها: class Student، حقول private، منشئ public، getter يرجع int، وsetter void. في UML النوع بعد النقطتين؛ في Java النوع قبل الاسم.</p>"
      },
      {
        "title": "جدول الرموز",
        "html": "<ul><li><code>+</code> يعني public، <code>-</code> يعني private، <code>#</code> يعني protected.</li><li>خط تحت field أو method يعني static. اسم أو method مائلة أو موسومة abstract تعني مجردة.</li><li><code>1</code> كائن واحد، <code>0..1</code> اختياري، <code>*</code> عدة كائنات، <code>0..*</code> صفر أو أكثر.</li><li>المثلث الفارغ المتجه للأب مع خط متصل يعني inheritance. الخط المتقطع للمثلث نحو interface يعني implements.</li></ul><p>لا تستنتج نوع العلاقة من ترتيب المربعات. اتبع شكل نهاية الخط واتجاهه. المعيّن يوضع عند الكل أو الحاوية، لا عند الجزء.</p>"
      },
      {
        "title": "is-a مقابل has-a",
        "html": "<p>Student is a Person: الطالب نوع من الشخص، لذلك inheritance مناسبة. Car has an Engine: السيارة تحتوي محركًا، لذلك المحرك حقل داخل Car وليس Car extends Engine. Association خط علاقة عام؛ aggregation وcomposition نوعان من علاقة الكل والجزء.</p><p>aggregation معيّن فارغ ◇: جزء مستقل يمكن مشاركته، مثل Teacher مرتبط بـDepartment. composition معيّن ممتلئ ◆: الكل يملك الجزء ضمن التصميم، مثل Car وأجزائها التي ينشئها أو ينسخها ويديرها.</p>"
      },
      {
        "title": "فرق واضح في الكود",
        "html": "<pre class=\"language-java\"><code>// aggregation: keep the supplied reference\nclass Team {\n    private Player captain;\n    Team(Player p) { captain = p; }\n}\n// composition: own a separate copy\nclass OwnedTeam {\n    private Player captain;\n    OwnedTeam(Player p) { captain = new Player(p); }\n}</code></pre><p>لو عدّل الخارج p، الفريق الأول يرى التغيير. الثاني يحتفظ بنسخته. Java لا تفرض المعين بالكلمات؛ أنت تنفذ سياسة الملكية بالإنشاء والنسخ. وجود new وحده لا يثبت composition إن كنت تسرّب المرجع الداخلي وتسمح بمشاركته. لا تتخيل أن garbage collector يقرأ UML ويطبق العلاقة تلقائيًا.</p>"
      },
      {
        "title": "روتين ترجمة السؤال",
        "html": "<p>1) اكتب أسماء الكلاسات والتواقيع كما هي. 2) حوّل الرموز إلى public/private/protected. 3) طبّق extends وimplements. 4) أضف fields للعلاقات وبالعدد المناسب. 5) ارجع للنص لمعنى كل method وسياسة النسخ. قد لا يكفي الرسم وحده لتحديد سلوك method؛ الوصف النصي يكملها. جرّب نموذج المعلمين وتوقّع الأسماء بعد التعديل.</p>"
      }
    ],
    "starter": "class Teacher {\n    private String name;\n    Teacher(String name) { this.name = name; }\n    Teacher(Teacher other) { this.name = other.name; }\n    void setName(String name) { this.name = name; }\n    public String toString() { return name; }\n}\nclass Department {\n    private Teacher teacher;\n    Department(Teacher teacher) { this.teacher = teacher; }\n    public String toString() { return teacher.toString(); }\n}\nclass OwnedDepartment {\n    private Teacher teacher;\n    OwnedDepartment(Teacher teacher) { this.teacher = new Teacher(teacher); }\n    public String toString() { return teacher.toString(); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Teacher t = new Teacher(\"Ali\");\n        Department a = new Department(t);\n        OwnedDepartment b = new OwnedDepartment(t);\n        t.setName(\"Omar\");\n        System.out.println(a);\n        System.out.println(b);\n    }\n}\n",
    "expectedOutput": "Omar\nAli",
    "challenge": "<p>ترجم هذا الوصف: Address له private String city ومنشئ وsetCity وtoString ومنشئ نسخ. Person يملك Address بعلاقة composition وينشئ نسخة منه في منشئه. عدّل Address الخارجي بعد إنشاء Person وتأكد أن وصف الشخص ما تغير.</p>",
    "hints": [
      "جهّز Address(Address other) أولًا.",
      "Person يحتفظ بـ new Address(address) وليس address مباشرة.",
      "استخدم toString لإظهار المدينة الداخلية دون إرجاع المرجع نفسه."
    ],
    "solution": "class Address {\n    private String city;\n    Address(String city) { this.city = city; }\n    Address(Address other) { this.city = other.city; }\n    void setCity(String city) { this.city = city; }\n    public String toString() { return city; }\n}\nclass Person {\n    private Address address;\n    Person(Address address) { this.address = new Address(address); }\n    public String toString() { return address.toString(); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Address a = new Address(\"Riyadh\");\n        Person p = new Person(a);\n        a.setCity(\"Jeddah\");\n        System.out.println(p);\n    }\n}\n",
    "quiz": [
      {
        "question": "المعين الممتلئ يمثل…",
        "choices": [
          "inheritance",
          "composition",
          "interface"
        ],
        "answer": 1,
        "explanation": "يدل على ملكية قوية للجزء ضمن تصميم الكل."
      },
      {
        "question": "+getPrice():double تصبح…",
        "choices": [
          "private double getPrice()",
          "public double getPrice()",
          "public void getPrice(double p)"
        ],
        "answer": 1,
        "explanation": "+ تعني public والنوع بعد : هو نوع الإرجاع."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "inheritance",
    "phase": "oop",
    "title": "التوريث · extends وsuper",
    "shortTitle": "التوريث",
    "minutes": 18,
    "summary": "نبني كلاسًا خاصًا فوق كلاس عام ونمرّر بيانات الأب بطريقة صحيحة.",
    "source": "2- Inheritance/W4_Lec_2_3-chapter4_1-inheritance.pptx، الشرائح 1–28",
    "objectives": [
      "تعريف subclass وsuperclass",
      "كتابة منشئ الابن باستخدام super",
      "إعادة استخدام توابع الأب دون تكرار الحقول"
    ],
    "sections": [
      {
        "title": "ما الذي نورّثه؟",
        "html": "<p>لو عندنا Person له name، وStudent شخص له mark أيضًا، نجعل Student extends Person. superclass هو الأب وsubclass الابن. الابن يمكنه استخدام الأعضاء التي تسمح صلاحياتها بالوصول. حقل الأب private موجود ضمن حالة الكائن، لكن الابن لا يصل له مباشرة. استخدم getter أو اجعل الحماية protected إذا طلب السؤال ذلك.</p>"
      },
      {
        "title": "الكود يبدأ من الأب",
        "html": "<pre class=\"language-java\"><code>class Person {\n    private String name;\n    public Person(String name) { this.name = name; }\n    public String getName() { return name; }\n}\nclass Student extends Person {\n    private int mark;\n    public Student(String name, int mark) {\n        super(name);\n        this.mark = mark;\n    }\n}</code></pre><p>new Student ينشئ كائن Student واحدًا، وتُجهّز بيانات Person كجزء منه. super(name) يستدعي constructor الأب. لا نكرر name داخل Student؛ التكرار يصنع حقلًا ثانيًا مختلفًا ويشوّش الحالة.</p>"
      },
      {
        "title": "المنشئات لا تُورّث",
        "html": "<p>إذا كان الأب يحتاج اسمًا في منشئه، يجب أن يوفّره الابن. في الأسلوب المستخدم في المقرر اكتب <code>super(...)</code> أول تعليمة في منشئ الابن. إذا لم تكتبها سيحاول Java استدعاء super() تلقائيًا؛ وهذا يفشل إن لم يوجد منشئ أب بلا مدخلات.</p><p><code>this(...)</code> إلى منشئ آخر من نفس الكلاس، و<code>super(...)</code> إلى الأب. لا تضعهما معًا كاستدعاءين صريحين في المنشئ نفسه.</p>"
      },
      {
        "title": "protected وsuper.method",
        "html": "<pre class=\"language-java\"><code>@Override\npublic String toString() {\n    return super.toString() + &quot; Mark=&quot; + mark;\n}</code></pre><p>إذا الأب لديه toString مفيدة، super.toString يستدعي نسخة الأب ثم نضيف بيانات الابن. @Override تطلب من المترجم التأكد أن التوقيع يعيد تعريف دالة موروثة. public متاحة للجميع؛ protected متاحة داخل الحزمة وللابن وفق قواعد الوصول. final على method يمنع إعادة تعريفها، وfinal على class يمنع توريثه.</p>"
      },
      {
        "title": "توقّع واصلح",
        "html": "<p>شغّل المثال ثم احذف super(name) مؤقتًا. اقرأ خطأ المنشئ، ثم أعدها. لماذا getName تعمل رغم أنها غير مكتوبة داخل Student؟ لأنها موروثة. لماذا name وحدها لا تعمل داخل Student؟ لأنها private في Person. Java تسمح بامتداد كلاس واحد مباشرة؛ تعدد العقود يأتي مع interfaces.</p>"
      }
    ],
    "starter": "class Person {\n    private String name;\n    public Person(String name) { this.name = name; }\n    public String getName() { return name; }\n    public String toString() { return \"Name=\" + name; }\n}\nclass Student extends Person {\n    private int mark;\n    public Student(String name, int mark) {\n        super(name);\n        this.mark = mark;\n    }\n    @Override public String toString() {\n        return super.toString() + \" Mark=\" + mark;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student(\"Ali\", 90);\n        System.out.println(s);\n        System.out.println(s.getName());\n    }\n}\n",
    "expectedOutput": "Name=Ali Mark=90\nAli",
    "challenge": "<p>اكتب Vehicle له private String brand ومنشئ وtoString. اكتب Car extends Vehicle له int seats. مرّر brand للأب، وأعد تعريف toString لتطبع Toyota seats=5 عند إنشاء Car(\"Toyota\",5).</p>",
    "hints": [
      "عرّف الأب قبل الابن في الملف لتسهيل قراءته.",
      "منشئ Car يبدأ بـ super(brand).",
      "أعد super.toString() + \" seats=\" + seats."
    ],
    "solution": "class Vehicle {\n    private String brand;\n    public Vehicle(String brand) { this.brand = brand; }\n    public String toString() { return brand; }\n}\nclass Car extends Vehicle {\n    private int seats;\n    public Car(String brand, int seats) { super(brand); this.seats = seats; }\n    @Override public String toString() { return super.toString() + \" seats=\" + seats; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Car(\"Toyota\", 5));\n    }\n}\n",
    "quiz": [
      {
        "question": "هل يرث الابن constructor الأب؟",
        "choices": [
          "نعم",
          "لا، لكنه يستدعيه باستخدام super"
        ],
        "answer": 1,
        "explanation": "المنشئات لا تُورث؛ كل كلاس يعرّف منشئاته."
      },
      {
        "question": "super.toString() يستدعي…",
        "choices": [
          "نسخة الأب",
          "نسخة الابن إلى ما لا نهاية",
          "main"
        ],
        "answer": 0,
        "explanation": "super يحدد سلوك الأب الذي نريد إعادة استخدامه."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "polymorphism",
    "phase": "oop",
    "title": "تعدد الأشكال والتحويل · من الذي ينفّذ؟",
    "shortTitle": "تعدد الأشكال والتحويل",
    "minutes": 22,
    "summary": "نوع المرجع يحدد ما يمكن طلبه، ونوع الكائن يحدد نسخة الدالة.",
    "source": "3- Polymorhisim/W4_Lec_3&W5_Lec_1_2_3-W6-1chapter13-polymorphism-UPDATE.pptx، الشرائح 3–16، 39–44",
    "objectives": [
      "توقع dynamic dispatch",
      "استخدام instanceof قبل downcast",
      "تنفيذ typed equals بشكل صحيح"
    ],
    "sections": [
      {
        "title": "مرجع أب وكائن ابن",
        "html": "<pre class=\"language-java\"><code>Animal a = new Cat();\na.speak();</code></pre><p>نوع المتغير المكتوب Animal، لكن الكائن الفعلي Cat. إذا Cat تعيد تعريف speak فنسخة Cat تعمل. هذا polymorphism أو تعدد الأشكال: تستدعي نفس العملية على أنواع مختلفة ويأخذ كل نوع سلوكه. لا نحتاج if لكل نوع عند استدعاء method مشتركة.</p>"
      },
      {
        "title": "overriding غير overloading",
        "html": "<p>Overriding: ابن يعيد تعريف method بنفس الاسم والمدخلات مع نوع إرجاع متوافق، مثل speak(). التنفيذ يختار من نوع الكائن الفعلي. Overloading: عدة methods اسمها واحد وقائمة مدخلاتها مختلفة، مثل print(int) وprint(String)؛ المترجم يختار التوقيع من الأنواع المعلنة.</p><p>الحقول ليست polymorphic مثل الدوال. لا تكرر fields بنفس الاسم في الأب والابن لتتوقع نفس قواعد الدوال. static methods تُخفى ولا تتصرف مثل دوال الكائن المعاد تعريفها.</p>"
      },
      {
        "title": "ما حدود مرجع الأب؟",
        "html": "<pre class=\"language-java\"><code>Animal a = new Cat();\n// a.purr(); // not declared in Animal\nif (a instanceof Cat) {\n    Cat c = (Cat) a;\n    c.purr();\n}</code></pre><p>المترجم يسمح عبر a بما يعلنه Animal. للوصول لدالة تخص Cat فقط نتحقق instanceof ثم نحول المرجع. upcast من ابن لأب آمن عادةً وتلقائي؛ downcast يحتاج تأكد. التحويل لا يغير الكائن ولا يصنع كائنًا جديدًا. إذا كان Animal a = new Dog() ثم حاولت (Cat) a فسيحدث ClassCastException أثناء التنفيذ. أما تحويل مباشر بين صنفين غير متوافقين فقد يرفضه المترجم أصلًا.</p>"
      },
      {
        "title": "الفخ الموجود في نمط الاختبارات",
        "html": "<pre class=\"language-java\"><code>// Base declaration required by a UML:\npublic boolean equals(Device other) {\n    return other != null &amp;&amp; id.equals(other.id);\n}\n// In Lamp extends Device:\n@Override\npublic boolean equals(Device other) {\n    if (!(other instanceof Lamp)) return false;\n    Lamp lamp = (Lamp) other;\n    return super.equals(other) &amp;&amp; color.equals(lamp.color);\n}</code></pre><p>equals(Device) في الأب overload بالنسبة إلى Object.equals(Object). داخل الابن نفس equals(Device) تكون override لدالة الأب، ولذلك @Override هنا صحيحة. لا تغيّرها إلى equals(Lamp) وإلا ستصبح overload جديدة وتكسر التصرف المطلوب.</p><p>إذا المصفوفة من interface، قد تحتاج تحويل الطرفين إلى Device ليُختار equals(Device): <code>((Device)items[i]).equals((Device)item)</code> بعد ضمان النوع. اكتب التوقيع المطلوب في السؤال حرفيًا.</p>"
      },
      {
        "title": "اختبر بمرجع الأب",
        "html": "<p>لا تختبر Cat فقط بـ Cat c. استخدم Animal a=new Cat ثم استدع speak. هذه التجربة تثبت أن overriding يعمل فعلًا. وفي مصفوفة Animal[] ضَع Cat وDog، ولف عليها بدالة speak واحدة. عدّل ترتيب العناصر وتوقع ترتيب الناتج.</p>"
      }
    ],
    "starter": "class Animal {\n    public void speak() { System.out.println(\"Animal\"); }\n}\nclass Cat extends Animal {\n    @Override public void speak() { System.out.println(\"Meow\"); }\n    public void purr() { System.out.println(\"Purr\"); }\n}\nclass Dog extends Animal {\n    @Override public void speak() { System.out.println(\"Woof\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal[] animals = {new Cat(), new Dog()};\n        for (Animal a : animals) {\n            a.speak();\n            if (a instanceof Cat) ((Cat) a).purr();\n        }\n    }\n}\n",
    "expectedOutput": "Meow\nPurr\nWoof",
    "challenge": "<p>اكتب Employee بدالة salary ترجع 0. اكتب FullTime ترجع 5000 وPartTime لها hours وترجع hours*50. ضع الكائنين في Employee[] واطبع الرواتب عبر حلقة واحدة. ساعات PartTime=20 فالناتج 5000.0 ثم 1000.0.</p>",
    "hints": [
      "كل subclass extends Employee.",
      "حافظ على التوقيع public double salary() في الثلاثة.",
      "الحلقة for(Employee e : employees) تطبع e.salary()."
    ],
    "solution": "class Employee {\n    public double salary() { return 0; }\n}\nclass FullTime extends Employee {\n    @Override public double salary() { return 5000; }\n}\nclass PartTime extends Employee {\n    private int hours;\n    PartTime(int hours) { this.hours = hours; }\n    @Override public double salary() { return hours * 50.0; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Employee[] employees = {new FullTime(), new PartTime(20)};\n        for (Employee e : employees) System.out.println(e.salary());\n    }\n}\n",
    "quiz": [
      {
        "question": "Animal a=new Cat(); a.speak(); أي نسخة تعمل إذا Cat أعادت تعريفها؟",
        "choices": [
          "Animal",
          "Cat",
          "خطأ دائمًا"
        ],
        "answer": 1,
        "explanation": "نوع الكائن الحقيقي يحدد نسخة instance method المعاد تعريفها."
      },
      {
        "question": "في الابن Lamp، أي توقيع يعيد تعريف equals(Device) للأب؟",
        "choices": [
          "equals(Lamp)",
          "equals(Device)",
          "equals(String)"
        ],
        "answer": 1,
        "explanation": "يجب الحفاظ على قائمة أنواع المدخلات، لا تغييرها إلى نوع الابن."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "abstract",
    "phase": "oop",
    "title": "الكلاس المجرّد · المشترك والناقص",
    "shortTitle": "الكلاس المجرّد",
    "minutes": 16,
    "summary": "أب يجمع البيانات ويترك طريقة الحساب لكل ابن.",
    "source": "3- Polymorhisim/W4_Lec_3&W5_Lec_1_2_3-W6-1chapter13-polymorphism-UPDATE.pptx، الشرائح 23–39، 45",
    "objectives": [
      "تعريف abstract class وmethod",
      "فهم سبب منع new للكلاس المجرد",
      "إكمال الوظائف في subclasses"
    ],
    "sections": [
      {
        "title": "لماذا لا نعرف مساحة شكل عام؟",
        "html": "<p>Shape قد يكون دائرة أو مستطيلًا. يوجد مفهوم area لكل الأشكال، لكن لا توجد معادلة واحدة تصلح لكل شكل. نكتب وعدًا بأن كل شكل سيحسب مساحته، ونترك الجسم للنوع المحدد.</p><pre class=\"language-java\"><code>abstract class Shape {\n    protected String color;\n    public Shape(String color) { this.color = color; }\n    public abstract double area();\n    public String toString() { return color + &quot; area=&quot; + area(); }\n}</code></pre>"
      },
      {
        "title": "معنى abstract بالضبط",
        "html": "<p><code>public abstract double area();</code> رأس بلا جسم وينتهي بـ; . كلاس يحتوي method abstract يجب أن يكون abstract. ويمكن للكلاس abstract أن يحتوي أيضًا methods كاملة وfields وconstructors، بل يمكن أن يكون بلا methods abstract. لا تضع جسمًا فارغًا مع method abstract.</p>"
      },
      {
        "title": "الابن يكمل الوعد",
        "html": "<pre class=\"language-java\"><code>class Rectangle extends Shape {\n    private double width, height;\n    public Rectangle(String color, double width, double height) {\n        super(color);\n        this.width = width;\n        this.height = height;\n    }\n    @Override public double area() { return width * height; }\n}</code></pre><p>Rectangle concrete لأنه أكمل المطلوب. إذا لم ينفذ area يجب أن يكون abstract أيضًا. abstract method لا تكون private؛ الابن يحتاج إعادة تعريفها. لا تجمع final مع abstract لأنها أوامر متعارضة.</p>"
      },
      {
        "title": "ما الذي يمكن إنشاؤه؟",
        "html": "<pre class=\"language-java\"><code>// Shape s = new Shape(&quot;red&quot;); // illegal\nShape s = new Rectangle(&quot;red&quot;, 4, 5);\nSystem.out.println(s.area());</code></pre><p>يجوز متغير أو مصفوفة من نوع abstract. الممنوع new لنفس abstract class. constructor الأب ما زال يعمل عند بناء الابن عبر super. وتصحيح مهم: abstract class لا تضمن وجود constructor بلا مدخلات؛ القاعدة مثل أي class.</p>"
      },
      {
        "title": "كيف يظهر في سؤال اللاب؟",
        "html": "<p>غالبًا interface تعلن action، والأب abstract يجمع id أو name أو price، والابنان يحسبان النتيجة بطرق مختلفة. لا تخترع return 0 في الأب للهروب من abstract إذا المطلوب إبقاء الدالة مجردة. جرّب إضافة Square ثم تشغيل المصفوفة دون تغيير حلقة الطباعة.</p>"
      }
    ],
    "starter": "abstract class Shape {\n    protected String color;\n    public Shape(String color) { this.color = color; }\n    public abstract double area();\n    public String toString() { return color + \" area=\" + area(); }\n}\nclass Rectangle extends Shape {\n    private double width, height;\n    public Rectangle(String color, double width, double height) {\n        super(color); this.width = width; this.height = height;\n    }\n    @Override public double area() { return width * height; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle(\"red\", 4, 5);\n        System.out.println(s);\n    }\n}\n",
    "expectedOutput": "red area=20.0",
    "challenge": "<p>أضف Square extends Shape له side، يحسب side*side. ضع Rectangle(\"red\",4,5) وSquare(\"blue\",3) في Shape[] واطبع مساحتيهما عبر area().</p>",
    "hints": [
      "Square يحتاج استدعاء super(color) في منشئه.",
      "أعد تعريف public double area().",
      "أنشئ Shape[] فيه كائنات concrete فقط."
    ],
    "solution": "abstract class Shape {\n    protected String color;\n    public Shape(String color) { this.color = color; }\n    public abstract double area();\n}\nclass Rectangle extends Shape {\n    private double width, height;\n    Rectangle(String color, double width, double height) {\n        super(color); this.width = width; this.height = height;\n    }\n    public double area() { return width * height; }\n}\nclass Square extends Shape {\n    private double side;\n    Square(String color, double side) { super(color); this.side = side; }\n    public double area() { return side * side; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Shape[] shapes = {new Rectangle(\"red\", 4, 5), new Square(\"blue\", 3)};\n        for (Shape s : shapes) System.out.println(s.area());\n    }\n}\n",
    "quiz": [
      {
        "question": "هل abstract class يمكن أن تحتوي constructor؟",
        "choices": [
          "نعم ويستدعيه الابن",
          "لا",
          "نعم وننشئها بـnew مباشرة"
        ],
        "answer": 0,
        "explanation": "المنشئ يجهز جزء الأب عند إنشاء كائن concrete من الابن."
      },
      {
        "question": "الصياغة الصحيحة؟",
        "choices": [
          "public abstract double area();",
          "public abstract double area() {}",
          "public double abstract area() {return 0;}"
        ],
        "answer": 0,
        "explanation": "الدالة abstract رأس بلا جسم."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "interfaces",
    "phase": "oop",
    "title": "الواجهة · عقد يربط الكلاسات",
    "shortTitle": "الواجهة",
    "minutes": 20,
    "summary": "implements، مصفوفات الواجهات، وكيف تلتقي مع abstract.",
    "source": "4- Interface/W6_Lec_2_3-chapter5-interfaces_UPDATED.pptx، الشرائح 2–21",
    "objectives": [
      "تعريف interface وتنفيذها",
      "فهم public methods وثوابت الواجهة",
      "استخدام interface[] مع abstract base"
    ],
    "sections": [
      {
        "title": "العقد يقول ماذا نقدر نطلب",
        "html": "<p>تخيّل أي شيء يمكن دفع قيمته: فاتورة أو موظف. التفاصيل مختلفة، لكن يمكن طلب amount() من كليهما. interface تصف العملية المتاحة دون أن تفرض أبًا واحدًا لكل الأصناف.</p><pre class=\"language-java\"><code>interface Payable {\n    double amount();\n}\nclass Invoice implements Payable {\n    private int quantity;\n    private double price;\n    Invoice(int quantity, double price) {\n        this.quantity = quantity; this.price = price;\n    }\n    public double amount() { return quantity * price; }\n}</code></pre>"
      },
      {
        "title": "قواعد نحتاجها في هذا المقرر",
        "html": "<p>الدالة المجردة المعلنة في interface عامة public ضمنيًا، وتنفيذها في class يجب أن يكون public. fields الواجهة هي public static final ضمنيًا. لا تصنع new للواجهة، ولا تضع constructor لها. يمكن لكلاس أن implements أكثر من interface، لكنه extends كلاسًا واحدًا مباشرة.</p><p>Java الحديثة تسمح أيضًا بـ default/static وبعض private methods في interfaces، لكن نمط المقرر والاختبارات هنا يعتمد على العقود المجردة والثوابت. لا نحتاج إضافة هذه المزايا لحل الأسئلة.</p>"
      },
      {
        "title": "أب مجرد ينفّذ عقدًا",
        "html": "<pre class=\"language-java\"><code>abstract class Employee implements Payable {\n    protected String name;\n    Employee(String name) { this.name = name; }\n    // amount() remains abstract through the interface\n}\nclass SalariedEmployee extends Employee {\n    private double salary;\n    SalariedEmployee(String name, double salary) {\n        super(name); this.salary = salary;\n    }\n    public double amount() { return salary; }\n}</code></pre><p>يجوز Employee ألا يكمل amount لأنه abstract. الابن concrete يجب أن يكمل كل الدوال المطلوبة. يمكنك أيضًا إعادة إعلانها في الأب كـ public abstract double amount(); لتوضيح العقد.</p>"
      },
      {
        "title": "مصفوفة interface",
        "html": "<pre class=\"language-java\"><code>Payable[] items = {\n    new Invoice(2, 50),\n    new SalariedEmployee(&quot;Ali&quot;, 500)\n};\nfor (Payable p : items) System.out.println(p.amount());</code></pre><p>نستطيع جمع أصناف مختلفة تحقق نفس العقد. عبر Payable نستدعي ما تعلنه الواجهة؛ للوصول لحقول/دوال أخرى نحتاج تحويلًا بعد التحقق. interface تستطيع extends واجهة أخرى؛ الكلاس الذي ينفذ الجديدة يكمل متطلبات الاثنتين.</p>"
      },
      {
        "title": "متى أستخدم abstract ومتى interface؟",
        "html": "<p>abstract class يجمع حالة مشتركة وتطبيقًا مشتركًا ضمن عائلة: Employee.name. interface يصف قدرة أو عقدًا: Payable.amount. كثير من أسئلة اللاب تستخدم الاثنين معًا، فلا تعتبرهما بديلين دائمًا. جرّب حذف public من تنفيذ amount وشاهد رسالة ضعف صلاحية الوصول ثم أعدها.</p>"
      }
    ],
    "starter": "interface Payable { double amount(); }\nabstract class Employee implements Payable {\n    protected String name;\n    Employee(String name) { this.name = name; }\n}\nclass SalariedEmployee extends Employee {\n    private double salary;\n    SalariedEmployee(String name, double salary) { super(name); this.salary = salary; }\n    public double amount() { return salary; }\n}\nclass Invoice implements Payable {\n    private int quantity;\n    private double price;\n    Invoice(int quantity, double price) { this.quantity = quantity; this.price = price; }\n    public double amount() { return quantity * price; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Payable[] items = {new Invoice(2, 50), new SalariedEmployee(\"Ali\", 500)};\n        for (Payable p : items) System.out.println(p.amount());\n    }\n}\n",
    "expectedOutput": "100.0\n500.0",
    "challenge": "<p>اكتب interface Switchable فيها void turnOn(). اكتب abstract Device يطبقها وله name، ثم Lamp وFan ينفذان turnOn بطباعة اسم الجهاز وON. ضع النوعين في Switchable[] وشغلهما بحلقة واحدة.</p>",
    "hints": [
      "Device implements Switchable ويبقى abstract.",
      "Lamp وFan extends Device وتنفذان public void turnOn().",
      "في الحلقة استخدم Switchable s ثم s.turnOn()."
    ],
    "solution": "interface Switchable { void turnOn(); }\nabstract class Device implements Switchable {\n    protected String name;\n    Device(String name) { this.name = name; }\n}\nclass Lamp extends Device {\n    Lamp(String name) { super(name); }\n    public void turnOn() { System.out.println(name + \" ON\"); }\n}\nclass Fan extends Device {\n    Fan(String name) { super(name); }\n    public void turnOn() { System.out.println(name + \" ON\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Switchable[] devices = {new Lamp(\"Desk lamp\"), new Fan(\"Room fan\")};\n        for (Switchable s : devices) s.turnOn();\n    }\n}\n",
    "quiz": [
      {
        "question": "الكلاس ينفذ واجهة باستخدام…",
        "choices": [
          "extends",
          "implements",
          "instanceof"
        ],
        "answer": 1,
        "explanation": "extends لكلاس أب أو تمديد interface، وimplements لتنفيذ interface في class."
      },
      {
        "question": "لماذا تنفيذ amount يجب أن يكون public؟",
        "choices": [
          "لأن عقد الواجهة عام ولا يجوز تضييقه",
          "لأنه static",
          "لأن اسمها amount"
        ],
        "answer": 0,
        "explanation": "الدالة المجردة في interface public ضمنيًا."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "exceptions",
    "phase": "advanced",
    "title": "الأخطاء · try وcatch وfinally",
    "shortTitle": "الأخطاء",
    "minutes": 18,
    "summary": "نعرف أين فشل البرنامج، ثم نعالج الحالة بدل التخمين.",
    "source": "5- Exception/W8_Lec_1_Lec_2-chapter6_1-exceptions_UPDATED_2.pptx، الشرائح 3–32؛ 5- Exception/W8_Lec_2_Lec_3-chapter6-exceptions_2_UPDATED.pptx، الشرائح 2–17",
    "objectives": [
      "فهم تدفق الاستثناء",
      "ترتيب catch من الأخص للأعم",
      "تمييز خطأ الترجمة عن runtime exception"
    ],
    "sections": [
      {
        "title": "خطأ أثناء التشغيل",
        "html": "<p>إذا حاولت تحويل \"abc\" إلى عدد، فهذه حالة استثنائية. Java تصنع كائن Exception وتبحث عمن يتعامل معه. إن لم يوجد معالج مناسب قد يتوقف مسار التنفيذ وتظهر stack trace. خطأ مثل فاصلة ناقصة خطأ ترجمة، ولا يعالجه try/catch.</p>"
      },
      {
        "title": "try ثم catch",
        "html": "<pre class=\"language-java\"><code>try {\n    int age = Integer.parseInt(&quot;abc&quot;);\n    System.out.println(&quot;Age=&quot; + age);\n} catch (NumberFormatException e) {\n    System.out.println(&quot;Please enter a number&quot;);\n}\nSystem.out.println(&quot;Done&quot;);</code></pre><p>يدخل try ويحاول التحويل. عند الفشل يقفز إلى catch المطابقة؛ السطر التالي داخل try لا يعمل. بعد catch يكمل عند Done. لا يعود إلى السطر الذي فشل ليعيده تلقائيًا.</p>"
      },
      {
        "title": "أنواع تعرفها من التجارب",
        "html": "<ul><li><code>NumberFormatException</code>: نص ليس عددًا صالحًا.</li><li><code>NullPointerException</code>: طلبت method/field من null.</li><li><code>ArrayIndexOutOfBoundsException</code>: فهرس خارج الحدود.</li><li><code>IllegalArgumentException</code>: قيمة مدخل غير مقبولة.</li><li><code>ArithmeticException</code>: مثل قسمة int على صفر. قسمة double على صفر لها سلوك عددي مختلف.</li></ul><p>لا تجعل catch(Exception e) تخفي كل مشكلة أثناء التطوير. نوع دقيق ورسالة مفهومة يساعدانك تكتشف السبب.</p>"
      },
      {
        "title": "ترتيب catch وfinally",
        "html": "<pre class=\"language-java\"><code>try {\n    System.out.println(Integer.parseInt(&quot;abc&quot;));\n} catch (NumberFormatException e) {\n    System.out.println(&quot;Bad number&quot;);\n} catch (Exception e) {\n    System.out.println(&quot;Other problem&quot;);\n} finally {\n    System.out.println(&quot;Finished attempt&quot;);\n}</code></pre><p>النوع الأخص أولًا، ثم الأب العام؛ العكس يجعل catch الخاصة غير قابلة للوصول. finally تعمل عادةً سواء نجح try أو حدث استثناء، وتستخدم للتنظيف. لا تضع return فيها لأنه قد يطغى على نتيجة أو استثناء سابق.</p>"
      },
      {
        "title": "اقرأ أول سطر مهم",
        "html": "<p>من stack trace خذ اسم الاستثناء ورقم السطر في ملفك، ثم انظر للقيمة التي سبّبته. NPE يحتاج تفتيش المرجع null، وليس تغيير الحلقة عشوائيًا. جرّب في المثال \"20\" ثم \"abc\" وحدد السطور التي ستظهر قبل الضغط على تشغيل.</p>"
      }
    ],
    "starter": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int age = Integer.parseInt(\"abc\");\n            System.out.println(\"Age=\" + age);\n        } catch (NumberFormatException e) {\n            System.out.println(\"Bad number\");\n        } finally {\n            System.out.println(\"Finished attempt\");\n        }\n        System.out.println(\"Done\");\n    }\n}\n",
    "expectedOutput": "Bad number\nFinished attempt\nDone",
    "challenge": "<p>عندك النصوص {\"12\",\"oops\",\"8\"}. مر عليها وحاول تحويل كل واحد إلى int. اطبع العدد إذا نجح وInvalid إذا فشل، ثم أكمل لبقية العناصر. يجب ظهور 12 ثم Invalid ثم 8.</p>",
    "hints": [
      "تحتاج try/catch داخل الحلقة كي يعالج كل عنصر مستقلًا.",
      "التقط NumberFormatException.",
      "إذا وضعت try خارج الحلقة كلها، سيخرج منها أول فشل."
    ],
    "solution": "public class Main {\n    public static void main(String[] args) {\n        String[] values = {\"12\", \"oops\", \"8\"};\n        for (String value : values) {\n            try {\n                System.out.println(Integer.parseInt(value));\n            } catch (NumberFormatException e) {\n                System.out.println(\"Invalid\");\n            }\n        }\n    }\n}\n",
    "quiz": [
      {
        "question": "إذا وقع استثناء في وسط try، هل تنفذ بقية try بعدها؟",
        "choices": [
          "نعم دائمًا",
          "لا، ينتقل للمعالج المناسب",
          "ينفذ main من البداية"
        ],
        "answer": 1,
        "explanation": "تُتجاوز بقية try عند القفز إلى catch."
      },
      {
        "question": "أي catch أولًا؟",
        "choices": [
          "Exception ثم NumberFormatException",
          "NumberFormatException ثم Exception"
        ],
        "answer": 1,
        "explanation": "الأخص أولًا وإلا يحتجزه النوع العام."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "custom-exceptions",
    "phase": "advanced",
    "title": "throw وthrows والاستثناء الخاص",
    "shortTitle": "throw وthrows والاستثناء الخاص",
    "minutes": 20,
    "summary": "نكتب شرط الرفض، ثم نحدد من يتحمل التعامل معه.",
    "source": "5- Exception/W9_Lec_1_2_3-chapter6-exceptions_3_UPDATED_22.pptx، الشرائح 2–42",
    "objectives": [
      "تمييز throw من throws",
      "تعريف checked custom exception",
      "نقل throws من منشئ الأب إلى الابن"
    ],
    "sections": [
      {
        "title": "throw يفعل، throws يعلن",
        "html": "<pre class=\"language-java\"><code>static double divide(double a, double b) {\n    if (b == 0) throw new IllegalArgumentException(&quot;Zero denominator&quot;);\n    return a / b;\n}</code></pre><p><code>throw</code> داخل الجسم يرمي كائن الاستثناء الآن. <code>throws</code> في رأس الدالة يعلن أن الاستثناء قد يخرج للمستدعي. وجود throws لا يرمي شيئًا وحده، ولا يعالج الخطأ.</p>"
      },
      {
        "title": "checked وunchecked",
        "html": "<p>RuntimeException وأبناؤها مثل IllegalArgumentException تُسمى unchecked: المترجم لا يجبرك على catch أو throws. الاستثناءات checked مثل IOException وClassNotFoundException يجب التعامل معها بـtry/catch أو إعلان throws. Error وأبناؤها أيضًا unchecked؛ غالبًا تمثل مشكلات لا نعالجها كتحقق عادي من المدخلات.</p>"
      },
      {
        "title": "اصنع استثناءك",
        "html": "<pre class=\"language-java\"><code>class MenuException extends Exception {\n    public MenuException(String message) {\n        super(message);\n    }\n}\nclass Item {\n    private double price;\n    public Item(double price) throws MenuException {\n        if (price &lt; 0) throw new MenuException(&quot;Negative price&quot;);\n        this.price = price;\n    }\n}</code></pre><p>extends Exception يجعل استثناءنا checked. super(message) يحفظ الرسالة في الأب؛ لاحقًا e.getMessage() تعيدها. إن كان المطلوب unchecked في السؤال نمدد RuntimeException. اختر كما طُلب، لا تغيّر الأب لتسكت رسالة المترجم.</p>"
      },
      {
        "title": "المنشئ الابن والمستدعي",
        "html": "<pre class=\"language-java\"><code>class Meal extends Item {\n    public Meal(double price) throws MenuException {\n        super(price);\n    }\n}\n// in main:\ntry {\n    Meal meal = new Meal(-5);\n} catch (MenuException e) {\n    System.out.println(e.getMessage());\n}</code></pre><p>منشئ Meal يستدعي منشئ Item الذي قد يرمي checked exception؛ لذلك يعلن throws MenuException. main تختار catch لتعرض الرسالة. هذه سلسلة مسؤولية: الابن يمرر والاستدعاء الخارجي يعالج. إذا فشل constructor فلن تحصل على كائن مكتمل منه.</p>"
      },
      {
        "title": "العقد وحدود إعادة التعريف",
        "html": "<p>عند override لدالة لا يمكنك إضافة checked exception أوسع من التي يسمح بها توقيع الأب. يمكنك التقاط الاستثناء داخل الدالة أو رمي نوع متوافق. أما إعادة رمي استثناء في catch بـ <code>throw e;</code> فتمرره لمن فوقك. جرّب سعر 0 وسعر -1 وتأكد أن الصفر مسموح إذا الشرط يقول «غير سالب».</p>"
      }
    ],
    "starter": "class MenuException extends Exception {\n    public MenuException(String message) { super(message); }\n}\nclass Item {\n    private double price;\n    public Item(double price) throws MenuException {\n        if (price < 0) throw new MenuException(\"Negative price\");\n        this.price = price;\n    }\n}\nclass Meal extends Item {\n    public Meal(double price) throws MenuException { super(price); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            new Meal(-5);\n            System.out.println(\"Created\");\n        } catch (MenuException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}\n",
    "expectedOutput": "Negative price",
    "challenge": "<p>اكتب AgeException extends Exception. اكتب Person constructor(int age) throws AgeException يرفض العمر الأقل من 0 أو الأكبر من 120. اختبر إنشاء -1 داخل try/catch واطبع رسالة واضحة، ثم أنشئ 20 في محاولة منفصلة واطبع OK.</p>",
    "hints": [
      "الشرط age < 0 || age > 120.",
      "المنشئ يعلن throws AgeException؛ الجسم يرمي new AgeException(...).",
      "محاولتان منفصلتان تسمحان باختبار الصحيح بعد غير الصحيح."
    ],
    "solution": "class AgeException extends Exception {\n    public AgeException(String message) { super(message); }\n}\nclass Person {\n    private int age;\n    public Person(int age) throws AgeException {\n        if (age < 0 || age > 120) throw new AgeException(\"Age out of range\");\n        this.age = age;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try { new Person(-1); }\n        catch (AgeException e) { System.out.println(e.getMessage()); }\n        try { new Person(20); System.out.println(\"OK\"); }\n        catch (AgeException e) { System.out.println(e.getMessage()); }\n    }\n}\n",
    "quiz": [
      {
        "question": "أي واحدة ترمي الاستثناء فعليًا؟",
        "choices": [
          "throws",
          "throw",
          "catch"
        ],
        "answer": 1,
        "explanation": "throw ترمي كائن استثناء جديدًا أو موجودًا، وnew هي التي تنشئ الكائن، أما throws فإعلان في التوقيع."
      },
      {
        "question": "منشئ الأب يرمي checked exception؛ الابن الذي يستدعيه…",
        "choices": [
          "يتجاهلها دائمًا",
          "يعلن الاستثناء المتوافق في منشئه",
          "يغيرها إلى String"
        ],
        "answer": 1,
        "explanation": "تُمرر مسؤولية الاستثناء للمستدعي وفق سلسلة المنشئات."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "binary-files",
    "phase": "advanced",
    "title": "الملفات والبيانات الثنائية",
    "shortTitle": "الملفات والبيانات الثنائية",
    "minutes": 16,
    "summary": "File هو وصف للمسار، والـstream هو اتصال القراءة والكتابة.",
    "source": "6- Files/W10_Lec1_2-chapter3_1files_1_UPDATED.pptx، الشرائح 3–28",
    "objectives": [
      "تمييز File عن stream",
      "قراءة وكتابة bytes وprimitive types",
      "مطابقة ترتيب write وread"
    ],
    "sections": [
      {
        "title": "لماذا ملف؟",
        "html": "<p>المتغيرات في الذاكرة تختفي عند انتهاء البرنامج. الملف يحفظ البيانات لاسترجاعها. input يعني بيانات تدخل برنامجك، وoutput بيانات تخرج منه. النصّي يخزن حروفًا بتشفير مثل UTF-8، والثنائي يخزن بايتات وفق تنسيق نختاره.</p><p>في محرر المتصفح قد تكون الملفات داخل نظام ملفات افتراضي للجلسة. اعتمد على كتابة الملف وقراءته في نفس التشغيل في هذه التجارب، ولا تفترض أنه ملف في Downloads.</p>"
      },
      {
        "title": "File لا يفتح المحتوى",
        "html": "<pre class=\"language-java\"><code>File file = new File(&quot;data.bin&quot;);\nSystem.out.println(file.exists());\nSystem.out.println(file.getName());</code></pre><p>new File يمثل مسارًا فقط، ولا ينشئ ملفًا فعليًا ولا يفتحه. exists يفحص الوجود، isFile يفحص ملفًا عاديًا، وisDirectory مجلدًا. false من isFile لا يثبت أنه مجلد؛ قد لا يكون موجودًا. getAbsolutePath يعرض المسار الكامل.</p>"
      },
      {
        "title": "بايتات خام",
        "html": "<pre class=\"language-java\"><code>try (FileOutputStream out = new FileOutputStream(&quot;bytes.bin&quot;)) {\n    out.write(new byte[]{10, 20, 30});\n}\ntry (FileInputStream in = new FileInputStream(&quot;bytes.bin&quot;)) {\n    int value;\n    while ((value = in.read()) != -1) System.out.println(value);\n}</code></pre><p>في شرط الحلقة نقرأ أولًا ونضع الناتج في value، ثم نفحص هل يختلف عن -1. read يرجع int حتى يتسع للقيم 0..255 ولإشارة النهاية -1. لا تقرأ مرة واحدة وتفترض أن كامل الملف وصل دائمًا. try-with-resources يغلق الـstream تلقائيًا بعد الكتلة، ويمكنك أيضًا استخدام close كما في السلايدات.</p>"
      },
      {
        "title": "قيم لها أنواع",
        "html": "<pre class=\"language-java\"><code>try (DataOutputStream out = new DataOutputStream(new FileOutputStream(&quot;data.bin&quot;))) {\n    out.writeInt(113);\n    out.writeDouble(19.5);\n}\ntry (DataInputStream in = new DataInputStream(new FileInputStream(&quot;data.bin&quot;))) {\n    int id = in.readInt();\n    double price = in.readDouble();\n}</code></pre><p>طبقة FileOutputStream تصل للملف وDataOutputStream تحول الأنواع إلى بايتات. يجب مطابقة الترتيب والنوع: int ثم double تُقرأ int ثم double. فتح output عادي يستبدل محتوى الملف؛ append خيار صريح لبعض streams.</p>"
      },
      {
        "title": "التعامل مع النهاية والخطأ",
        "html": "<p>دوال الملفات قد ترمي IOException وهي checked. إما catch مع رسالة أو throws إلى المستدعي. readInt بعد آخر بيانات قد يرمي EOFException. لا تستخدم available كعدد كائنات أو كحل عام لنهاية الملفات. في المثال نعرف عدد القيم وتنسيقها. غيّر الرقم المكتوب وتأكد أنه يُقرأ من الملف.</p>"
      }
    ],
    "starter": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        try (DataOutputStream out = new DataOutputStream(new FileOutputStream(\"data.bin\"))) {\n            out.writeInt(113);\n            out.writeDouble(19.5);\n        }\n        try (DataInputStream in = new DataInputStream(new FileInputStream(\"data.bin\"))) {\n            System.out.println(in.readInt());\n            System.out.println(in.readDouble());\n        }\n    }\n}\n",
    "expectedOutput": "113\n19.5",
    "challenge": "<p>اكتب ملفًا يحوي عدد العناصر 3 كـint ثم الأعداد 10 و20 و30. اقرأ العدد أولًا ثم اقرأ هذا العدد من القيم واحسب مجموعها 60.</p>",
    "hints": [
      "writeInt لطول المصفوفة ثم حلقة للقيم.",
      "readInt الأولى هي count وليست جزءًا من المجموع.",
      "افتح input بعد إغلاق output كي تكون البيانات مكتملة."
    ],
    "solution": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        int[] values = {10, 20, 30};\n        try (DataOutputStream out = new DataOutputStream(new FileOutputStream(\"numbers.bin\"))) {\n            out.writeInt(values.length);\n            for (int x : values) out.writeInt(x);\n        }\n        try (DataInputStream in = new DataInputStream(new FileInputStream(\"numbers.bin\"))) {\n            int count = in.readInt();\n            int sum = 0;\n            for (int i = 0; i < count; i++) sum += in.readInt();\n            System.out.println(sum);\n        }\n    }\n}\n",
    "quiz": [
      {
        "question": "new File(\"a.txt\") وحدها…",
        "choices": [
          "تفتح الملف للقراءة",
          "تمثل مسارًا",
          "تكتب ملفًا جديدًا"
        ],
        "answer": 1,
        "explanation": "التدفق stream هو الذي يفتح اتصال القراءة أو الكتابة."
      },
      {
        "question": "كتبنا int ثم double، كيف نقرأ؟",
        "choices": [
          "double ثم int",
          "int ثم double",
          "أي ترتيب"
        ],
        "answer": 1,
        "explanation": "التنسيق يعتمد على تسلسل الأنواع والبيانات."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "text-files",
    "phase": "advanced",
    "title": "ملفات النص · سطرًا سطرًا",
    "shortTitle": "ملفات النص",
    "minutes": 16,
    "summary": "PrintWriter للكتابة، وScanner أو BufferedReader للقراءة.",
    "source": "6- Files/W10_Lec_3_W11_Lec_1_2_chapter3_2_files.pptx، الشرائح 2–6",
    "objectives": [
      "كتابة نص بـPrintWriter",
      "قراءة حتى النهاية",
      "تحويل النصوص إلى أرقام"
    ],
    "sections": [
      {
        "title": "الشكل الذي يمكن قراءته",
        "html": "<p>الملف النصّي يحفظ الحروف: لو كتبت 113، تصبح محارف 1 ثم 1 ثم 3. تستطيع فتحه بمحرر نصوص. اختيار امتداد .txt يساعد الإنسان، لكنه لا يحدد طريقة الترميز وحده. اتفق على تنسيق بسيط: رقم في كل سطر أو حقول مفصولة بفاصل.</p>"
      },
      {
        "title": "الكتابة",
        "html": "<pre class=\"language-java\"><code>try (PrintWriter out = new PrintWriter(&quot;marks.txt&quot;, &quot;UTF-8&quot;)) {\n    out.println(70);\n    out.println(80);\n    out.println(90);\n}</code></pre><p>println تكتب القيمة ثم نهاية سطر. out هنا متغير الكاتب، بينما \"marks.txt\" اسم الملف. الإغلاق يفرغ البيانات المؤجلة. إذا أردت حفظ التغييرات إلى ملف فعلي من الموقع اتبع إمكانات التنزيل المتاحة؛ المثال التعليمي يقرأ الملف في الجلسة نفسها.</p>"
      },
      {
        "title": "Scanner يقرأ أنواعًا",
        "html": "<pre class=\"language-java\"><code>try (Scanner input = new Scanner(new File(&quot;marks.txt&quot;), &quot;UTF-8&quot;)) {\n    while (input.hasNextInt()) {\n        int mark = input.nextInt();\n        System.out.println(mark);\n    }\n}</code></pre><p>Scanner يحوّل النص إلى النوع المطلوب. hasNextLine للسطر، hasNext للكلمة، hasNextInt يتحقق هل التالي int صالح. انتبه: إذا هناك token غير عددي، hasNextInt تتوقف؛ اختر هل تريد رفض الملف أم تخطي ذلك token حسب المطلوب.</p>"
      },
      {
        "title": "BufferedReader يقرأ سطرًا",
        "html": "<pre class=\"language-java\"><code>try (BufferedReader in = new BufferedReader(new FileReader(&quot;marks.txt&quot;))) {\n    String line;\n    while ((line = in.readLine()) != null) {\n        int mark = Integer.parseInt(line.trim());\n        System.out.println(mark);\n    }\n}</code></pre><p>في <code>while ((line = in.readLine()) != null)</code> ننفذ الإسناد أولًا: نقرأ سطرًا ونضعه في line، ثم نقارن القيمة التي أُسندت مع null. readLine تعيد String بلا رمز نهاية السطر، وnull عند نهاية الملف. مقارنة null بـ== صحيحة لأنها فحص المرجع. الرقم يحتاج parseInt. FileReader بهذا الشكل يستخدم ترميز البيئة الافتراضي؛ إذا احتجت ترميزًا محددًا استخدم InputStreamReader مع UTF-8.</p>"
      },
      {
        "title": "كيف تختار وتختبر؟",
        "html": "<p>لأرقام مفصولة بفراغات Scanner مريح. لسطور كاملة مع مسافات BufferedReader واضح. لإنشاء ملف فارغ في المثال احذف تعليمات out.println الثلاث؛ لأن البرنامج يستبدل الملف عند الكتابة. حلقة القراءة يجب أن تعمل صفر مرة. إذا كنت تحسب المتوسط تحقق أن count ليس صفرًا. جرّب سطرًا غير عددي لتعرف أين تحتاج NumberFormatException.</p>"
      },
      {
        "title": "تقسيم السطر إلى كلمات",
        "html": "<p>لو كان السطر يحتوي اسمًا ورقمًا مفصولين بفاصلة، يمكنك تقسيمه. String.split يعيد مصفوفة، وStringTokenizer الموجود ضمن أهداف السلايدات يسمح بالمرور على tokens أي الأجزاء. مثالنا البسيط لا يعالج فواصل داخل الاسم أو قواعد CSV المعقدة.</p><pre class=\"language-java\"><code>String line = &quot;Ali,90&quot;;\nString[] parts = line.split(&quot;,&quot;);\nString name = parts[0];\nint mark = Integer.parseInt(parts[1]);\njava.util.StringTokenizer tokens = new java.util.StringTokenizer(line, &quot;,&quot;);\nwhile (tokens.hasMoreTokens()) System.out.println(tokens.nextToken());</code></pre><p>قبل استخدام parts[1] في برنامج حقيقي افحص عدد الأجزاء وتحقق من صلاحية العدد. كل token يرجع كنص، والتحويل إلى رقم مسؤوليتك.</p>"
      }
    ],
    "starter": "import java.io.*;\nimport java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        try (PrintWriter out = new PrintWriter(\"marks.txt\", \"UTF-8\")) {\n            out.println(70); out.println(80); out.println(90);\n        }\n        int sum = 0;\n        int count = 0;\n        try (Scanner input = new Scanner(new File(\"marks.txt\"), \"UTF-8\")) {\n            while (input.hasNextInt()) { sum += input.nextInt(); count++; }\n        }\n        if (count > 0) System.out.println((double) sum / count);\n        else System.out.println(\"No marks\");\n    }\n}\n",
    "expectedOutput": "80.0",
    "challenge": "<p>اكتب Ali وSara وOmar في names.txt كل اسم بسطر. اقرأ باستخدام BufferedReader واطبع الاسم مسبوقًا برقم يبدأ من 1: 1: Ali ثم 2: Sara ثم 3: Omar.</p>",
    "hints": [
      "PrintWriter.println لكل اسم.",
      "حلقة while تتوقف حين readLine تعيد null.",
      "استخدم count يبدأ 1 ثم زِده بعد طباعة كل سطر."
    ],
    "solution": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        try (PrintWriter out = new PrintWriter(\"names.txt\", \"UTF-8\")) {\n            out.println(\"Ali\"); out.println(\"Sara\"); out.println(\"Omar\");\n        }\n        try (BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(\"names.txt\"), \"UTF-8\"))) {\n            String line;\n            int count = 1;\n            while ((line = in.readLine()) != null) {\n                System.out.println(count + \": \" + line);\n                count++;\n            }\n        }\n    }\n}\n",
    "quiz": [
      {
        "question": "readLine عند نهاية الملف تعيد…",
        "choices": [
          "\"EOF\"",
          "null",
          "0"
        ],
        "answer": 1,
        "explanation": "null إشارة انتهاء السطور."
      },
      {
        "question": "ماذا يعيد readLine لسطر يحتوي 113؟",
        "choices": [
          "int",
          "String",
          "double"
        ],
        "answer": 1,
        "explanation": "تحتاج Integer.parseInt إذا أردته عددًا."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "serialization",
    "phase": "advanced",
    "title": "حفظ الكائنات · Serializable",
    "shortTitle": "حفظ الكائنات",
    "minutes": 17,
    "summary": "نكتب الكائن أو المصفوفة ونسترجعها بالأنواع الصحيحة.",
    "source": "6- Files/W10_Lec_3_W11_Lec_1_2_chapter3_2_files.pptx، الشرائح 7–19",
    "objectives": [
      "تعريف Serializable",
      "حفظ واسترجاع object[]",
      "فهم IOException وClassNotFoundException"
    ],
    "sections": [
      {
        "title": "من حالة كائن إلى بيانات",
        "html": "<p>Serialization تحويل حالة الكائن إلى تدفق بايتات يمكن حفظه. عند القراءة يُعاد بناء الكائنات. نستخدم ObjectOutputStream وObjectInputStream. الملف الناتج ثنائي ولا يصلح لفهم محتواه كملاحظات نصية.</p>"
      },
      {
        "title": "العلامة المطلوبة",
        "html": "<pre class=\"language-java\"><code>class Student implements Serializable {\n    private static final long serialVersionUID = 1L;\n    private String name;\n    private int mark;\n    Student(String name, int mark) { this.name = name; this.mark = mark; }\n}</code></pre><p>Serializable واجهة علامة لا تطلب methods. serialVersionUID يساعد تعريف نسخة بنية الكلاس. الكائنات التي تشير إليها fields يجب أن تكون قابلة للتسلسل أيضًا، وإلا قد يظهر NotSerializableException. static يتبع الكلاس فلا يُحفظ كحالة كائن؛ transient يستثني حقلًا من الحفظ الافتراضي.</p>"
      },
      {
        "title": "كتابة كائن أو مصفوفة",
        "html": "<pre class=\"language-java\"><code>Student[] students = {new Student(&quot;Ali&quot;, 90), new Student(&quot;Sara&quot;, 95)};\ntry (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(&quot;students.dat&quot;))) {\n    out.writeObject(students);\n}</code></pre><p>يمكن كتابة المصفوفة دفعة واحدة. المصفوفة نفسها قابلة للتسلسل، لكن عناصرها يجب أن تكون كذلك. لا تكتب بيانات بترتيب وتقرأها بترتيب مختلف.</p>"
      },
      {
        "title": "القراءة والتحويل",
        "html": "<pre class=\"language-java\"><code>try (ObjectInputStream in = new ObjectInputStream(new FileInputStream(&quot;students.dat&quot;))) {\n    Student[] loaded = (Student[]) in.readObject();\n}</code></pre><p>readObject نوع إرجاعها Object، لذلك نعيد تحويله لنوعنا المعروف. ClassNotFoundException تعني أن تعريف كلاس مطلوب لإعادة البناء غير متاح. التحويل إلى نوع خاطئ قد يرمي ClassCastException؛ هذان شيئان مختلفان. IOException تشمل مشكلات الإدخال والإخراج.</p>"
      },
      {
        "title": "جرّب إثبات الاسترجاع",
        "html": "<p>اطبع بيانات المصفوفة المسترجعة، لا الأصلية، حتى تتأكد أنك اختبرت القراءة. غيّر قيم الأصل قبل الحفظ ثم راقب التغيير. لا تتوقع == بين الكائن القديم والمسترجع؛ هما كائنان مختلفان رغم تشابه البيانات. تستخدم هذه الأمثلة ملفات ينشئها برنامجك نفسه.</p>"
      }
    ],
    "starter": "import java.io.*;\nclass Student implements Serializable {\n    private static final long serialVersionUID = 1L;\n    private String name;\n    private int mark;\n    Student(String name, int mark) { this.name = name; this.mark = mark; }\n    public String toString() { return name + \": \" + mark; }\n}\npublic class Main {\n    public static void main(String[] args) throws IOException, ClassNotFoundException {\n        Student[] students = {new Student(\"Ali\", 90), new Student(\"Sara\", 95)};\n        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(\"students.dat\"))) {\n            out.writeObject(students);\n        }\n        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream(\"students.dat\"))) {\n            Student[] loaded = (Student[]) in.readObject();\n            for (Student s : loaded) System.out.println(s);\n        }\n    }\n}\n",
    "expectedOutput": "Ali: 90\nSara: 95",
    "challenge": "<p>اكتب Product implements Serializable له name وprice. احفظ منتج Book سعره 25.5، اقرأه إلى متغير جديد، واطبع Book 25.5 عبر toString.</p>",
    "hints": [
      "Product يطبق Serializable ويفضل serialVersionUID.",
      "writeObject(p) يحفظ الكائن.",
      "Product loaded = (Product) in.readObject(); ثم اطبع loaded."
    ],
    "solution": "import java.io.*;\nclass Product implements Serializable {\n    private static final long serialVersionUID = 1L;\n    private String name;\n    private double price;\n    Product(String name, double price) { this.name = name; this.price = price; }\n    public String toString() { return name + \" \" + price; }\n}\npublic class Main {\n    public static void main(String[] args) throws IOException, ClassNotFoundException {\n        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(\"product.dat\"))) {\n            out.writeObject(new Product(\"Book\", 25.5));\n        }\n        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream(\"product.dat\"))) {\n            Product loaded = (Product) in.readObject();\n            System.out.println(loaded);\n        }\n    }\n}\n",
    "quiz": [
      {
        "question": "Serializable تطلب منك تنفيذ كم method؟",
        "choices": [
          "واحدة",
          "لا شيء؛ واجهة علامة",
          "ثلاث"
        ],
        "answer": 1,
        "explanation": "التطبيق يعطي علامة بأن التسلسل الافتراضي مدعوم."
      },
      {
        "question": "readObject تعيد…",
        "choices": [
          "String فقط",
          "Object",
          "Student تلقائيًا دائمًا"
        ],
        "answer": 1,
        "explanation": "نحوّل Object إلى النوع المتوقع مع الانتباه للتوافق."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "gui-basics",
    "phase": "advanced",
    "title": "GUI من الصفر · نافذة وعناصر",
    "shortTitle": "GUI من الصفر",
    "minutes": 17,
    "summary": "JFrame غرفة، وJLabel وJTextField وJButton محتوياتها.",
    "source": "7- GUI/W11_Lec_1_W14_Lec_2-chapter7_1-gui_new.pptx، الشرائح 3–26؛ 7- GUI/W14_Lec_3-chapter7_2-gui.pptx، الشرائح 2–10",
    "objectives": [
      "إنشاء JFrame مرئية",
      "اختيار عنصر العرض والإدخال",
      "فهم layout وcontent pane"
    ],
    "sections": [
      {
        "title": "ما هي GUI؟",
        "html": "<p>Graphical User Interface واجهة رسومية بدل أن تكون كل المدخلات في console. المستخدم يكتب في حقل ويضغط زرًا. في Swing: JFrame النافذة، JPanel حاوية داخلها، JLabel نص عرض، JTextField إدخال سطر واحد، JTextArea أسطر متعددة، JButton زر. هذه كلاسات عادية نصنع منها objects كما تعلمنا.</p>"
      },
      {
        "title": "ثلاث imports معتادة",
        "html": "<pre class=\"language-java\"><code>import javax.swing.*;\nimport java.awt.*;\nimport java.awt.event.*;</code></pre><p>swing للعناصر، awt لأدوات مثل Layout وColor وFont، وawt.event للأحداث. النجمة تعني أسماء الكلاسات داخل هذه الحزمة، ولا تشمل حزمًا فرعية تلقائيًا.</p>"
      },
      {
        "title": "نبني النافذة داخل المنشئ",
        "html": "<pre class=\"language-java\"><code>public Main() {\n    setTitle(&quot;My first GUI&quot;);\n    setSize(420, 220);\n    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    setLayout(new FlowLayout());\n    add(new JLabel(&quot;Name:&quot;));\n    add(new JTextField(15));\n    add(new JButton(&quot;Hello&quot;));\n}</code></pre><p>Main هنا extends JFrame، لذلك تستخدم دوال النافذة الموروثة. setSize عرض وارتفاع بالبكسل. close operation يحدد سلوك الإغلاق. setLayout يحدد تنظيم العناصر. add يضيفها لحاوية المحتوى. لا يكفي new JButton حتى يظهر؛ تحتاج add.</p>"
      },
      {
        "title": "إظهارها والنصوص",
        "html": "<p><code>setVisible(true)</code> تظهر النافذة بعد تجهيزها. نطلق Swing عبر SwingUtilities.invokeLater؛ هذا يضع إنشاء الواجهة على مسار أحداث Swing الصحيح. قالب Runnable في main يمكنك استخدامه كما هو الآن.</p><pre class=\"language-java\"><code>JTextField field = new JTextField(15);\nString text = field.getText();\nfield.setText(&quot;Student&quot;);\nJTextArea area = new JTextArea(5, 25);\narea.setEditable(false);\narea.append(&quot;Hello&quot; + System.lineSeparator());</code></pre><p>عدد columns ليس عدد الحروف المسموح بها بل عرضًا تقريبيًا. getText يرجع String حتى لو المستخدم كتب رقمًا. JScrollPane يضيف شريط تمرير حول JTextArea. ImageIcon يمكن عرضه داخل JLabel من ملف صورة.</p>"
      },
      {
        "title": "جرّب بعينك",
        "html": "<p>شغّل الكود واختر معاينة Swing في المختبر. ستظهر نافذة فيها اسم وحقل وزر، لكن الزر لن يفعل شيئًا بعد؛ لم نحدد حدثه. غيّر العنوان وحجم النافذة ثم أضف JLabel ثانية. إذا لم تظهر نافذة فتأكد من اكتمال تحميل محرك Java ووضع GUI قبل اتهام الكود.</p>"
      }
    ],
    "starter": "import javax.swing.*;\nimport java.awt.*;\npublic class Main extends JFrame {\n    public Main() {\n        setTitle(\"My first GUI\");\n        setSize(420, 220);\n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n        setLayout(new FlowLayout());\n        add(new JLabel(\"Name:\"));\n        add(new JTextField(15));\n        add(new JButton(\"Hello\"));\n    }\n    public static void main(String[] args) {\n        SwingUtilities.invokeLater(new Runnable() {\n            public void run() { new Main().setVisible(true); }\n        });\n    }\n}\n",
    "expectedOutput": "",
    "challenge": "<p>ابنِ نافذة بعنوان Student form، فيها JLabel باسم Name وحقل نص، ثم JLabel باسم Mark وحقل ثانٍ، ثم زر Save. يكفي أن تظهر العناصر؛ سلوك الزر في الدرس التالي.</p>",
    "hints": [
      "Main extends JFrame والمنشئ يجهز العناصر.",
      "استخدم FlowLayout وأضف العناصر بالترتيب.",
      "نفّذ setVisible(true) بعد إنشاء النافذة في main."
    ],
    "solution": "import javax.swing.*;\nimport java.awt.*;\npublic class Main extends JFrame {\n    public Main() {\n        setTitle(\"Student form\");\n        setSize(450, 200);\n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n        setLayout(new FlowLayout());\n        add(new JLabel(\"Name:\")); add(new JTextField(10));\n        add(new JLabel(\"Mark:\")); add(new JTextField(5));\n        add(new JButton(\"Save\"));\n    }\n    public static void main(String[] args) {\n        SwingUtilities.invokeLater(new Runnable() {\n            public void run() { new Main().setVisible(true); }\n        });\n    }\n}\n",
    "quiz": [
      {
        "question": "لإدخال سطر واحد نستخدم…",
        "choices": [
          "JLabel",
          "JTextField",
          "JFrame"
        ],
        "answer": 1,
        "explanation": "JLabel للعرض وJTextField لإدخال سطر."
      },
      {
        "question": "هل إنشاء زر بـnew وحده يجعله ظاهرًا؟",
        "choices": [
          "نعم",
          "لا، يجب إضافته للحاوية وإظهار النافذة"
        ],
        "answer": 1,
        "explanation": "الكائن قد يوجد دون أن يكون ضمن الواجهة المرئية."
      }
    ],
    "mode": "swing",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "gui-events",
    "phase": "advanced",
    "title": "أحداث الواجهة · اضغط فيحدث شيء",
    "shortTitle": "أحداث الواجهة",
    "minutes": 22,
    "summary": "ActionListener يربط ضغط الزر بمنطق الحساب والتحقق.",
    "source": "7- GUI/W11_Lec_1_W14_Lec_2-chapter7_1-gui_new.pptx، الشرائح 27–43؛ 7- GUI/W14_Lec_3-chapter7_2-gui.pptx، الشرائح 3–18",
    "objectives": [
      "تسجيل listener وكتابة actionPerformed",
      "قراءة وتحويل المدخلات",
      "تمييز أكثر من مصدر حدث"
    ],
    "sections": [
      {
        "title": "البرنامج ينتظر بدل أن ينتهي",
        "html": "<p>في برنامج console تنفذ خطوات متتابعة. في GUI جهّز النافذة ثم تنتظر أحداث المستخدم. Event هو خبر: هذا الزر ضُغط. Listener كائن يستقبل الخبر. Handler هو الدالة التي تنفذ رد الفعل. في هذا الدرس ننفذ ActionListener داخل النافذة نفسها مثل السلايدات.</p>"
      },
      {
        "title": "ثلاث قطع يجب أن تجتمع",
        "html": "<pre class=\"language-java\"><code>class MyFrame extends JFrame implements ActionListener {\n    // in constructor:\n    // calculate.addActionListener(this);\n    public void actionPerformed(ActionEvent e) {\n        // react here\n    }\n}</code></pre><p>1) implements ActionListener يعلن العقد. 2) addActionListener(this) يسجل النافذة كمستمع للزر. 3) actionPerformed بنفس التوقيع تنفذ الحدث. نسيان التسجيل يجعل الزر يبدو سليمًا لكنه بلا رد فعل.</p>"
      },
      {
        "title": "اقرأ ثم حوّل ثم احسب",
        "html": "<pre class=\"language-java\"><code>try {\n    double price = Double.parseDouble(input.getText().trim());\n    if (!Double.isFinite(price) || price &lt; 0) throw new IllegalArgumentException(&quot;Invalid price&quot;);\n    result.setText(&quot;Total: &quot; + price * 1.15);\n} catch (NumberFormatException ex) {\n    result.setText(&quot;Enter a number&quot;);\n} catch (IllegalArgumentException ex) {\n    result.setText(ex.getMessage());\n}</code></pre><p>النص يدخل من getText. trim يزيل الفراغات الطرفية. parseDouble يحوله. بعد التحقق نحسب ونضع النتيجة في JLabel. catch تمنع إدخالًا غير صحيح من إنهاء الحدث بلا رسالة مفهومة.</p>"
      },
      {
        "title": "زران وActionEvent واحد",
        "html": "<pre class=\"language-java\"><code>if (e.getSource() == calculate) {\n    // calculate result\n} else if (e.getSource() == clear) {\n    input.setText(&quot;&quot;);\n    result.setText(&quot;&quot;);\n}</code></pre><p>getSource يرجع كائن مصدر الحدث، ولذلك == مناسب هنا لأنك تسأل هل هو الزر نفسه. في مقارنة نصوص نستخدم equals. JTextField يولّد ActionEvent عند Enter إذا سجلت listener. JTextArea.setText يستبدل المحتوى وappend يضيف له.</p>"
      },
      {
        "title": "اختبارات المستخدم",
        "html": "<p>جرّب رقمًا صحيحًا، حقلًا فارغًا، نص abc، ورقمًا سالبًا. ثم زر Clear. لا تكتف بأن النافذة فتحت؛ كل زر عليه متطلب وسلوك يحتاج تجربة. JOptionPane.showMessageDialog(this,\"...\") نافذة رسالة، وshowInputDialog يرجع String قد يكون null عند الإلغاء، فتحقق منه قبل التحويل.</p>"
      }
    ],
    "starter": "import javax.swing.*;\nimport java.awt.*;\nimport java.awt.event.*;\npublic class Main extends JFrame implements ActionListener {\n    private JTextField input = new JTextField(10);\n    private JLabel result = new JLabel(\"Enter price\");\n    private JButton calculate = new JButton(\"Calculate\");\n    private JButton clear = new JButton(\"Clear\");\n    public Main() {\n        setTitle(\"Price calculator\"); setSize(440, 180);\n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n        setLayout(new FlowLayout());\n        add(input); add(calculate); add(clear); add(result);\n        calculate.addActionListener(this);\n        clear.addActionListener(this);\n    }\n    public void actionPerformed(ActionEvent e) {\n        if (e.getSource() == clear) { input.setText(\"\"); result.setText(\"\"); return; }\n        try {\n            double price = Double.parseDouble(input.getText().trim());\n            if (!Double.isFinite(price) || price < 0) throw new IllegalArgumentException(\"Invalid price\");\n            result.setText(\"Total: \" + price * 1.15);\n        } catch (NumberFormatException ex) {\n            result.setText(\"Enter a number\");\n        } catch (IllegalArgumentException ex) {\n            result.setText(ex.getMessage());\n        }\n    }\n    public static void main(String[] args) {\n        SwingUtilities.invokeLater(new Runnable() {\n            public void run() { new Main().setVisible(true); }\n        });\n    }\n}\n",
    "expectedOutput": "",
    "challenge": "<p>حوّل التطبيق إلى فاحص درجة: يقرأ 0..100، وعند Check يعرض Pass إذا الدرجة ≥60 وإلا Fail. خارج النطاق يعرض Invalid mark، والنص غير العددي Enter a number. احتفظ بزر Clear.</p>",
    "hints": [
      "بدّل اسم الزر والحساب فقط، واحتفظ ببنية listener.",
      "بعد parseDouble تحقق mark < 0 || mark > 100.",
      "result.setText(mark >= 60 ? \"Pass\" : \"Fail\"); أو if/else."
    ],
    "solution": "import javax.swing.*;\nimport java.awt.*;\nimport java.awt.event.*;\npublic class Main extends JFrame implements ActionListener {\n    private JTextField input = new JTextField(10);\n    private JLabel result = new JLabel(\"Enter mark\");\n    private JButton check = new JButton(\"Check\");\n    private JButton clear = new JButton(\"Clear\");\n    public Main() {\n        setTitle(\"Mark checker\"); setSize(400, 160);\n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n        setLayout(new FlowLayout());\n        add(input); add(check); add(clear); add(result);\n        check.addActionListener(this); clear.addActionListener(this);\n    }\n    public void actionPerformed(ActionEvent e) {\n        if (e.getSource() == clear) { input.setText(\"\"); result.setText(\"\"); return; }\n        try {\n            double mark = Double.parseDouble(input.getText().trim());\n            if (!Double.isFinite(mark) || mark < 0 || mark > 100) result.setText(\"Invalid mark\");\n            else result.setText(mark >= 60 ? \"Pass\" : \"Fail\");\n        } catch (NumberFormatException ex) { result.setText(\"Enter a number\"); }\n    }\n    public static void main(String[] args) {\n        SwingUtilities.invokeLater(new Runnable() {\n            public void run() { new Main().setVisible(true); }\n        });\n    }\n}\n",
    "quiz": [
      {
        "question": "كتبت actionPerformed لكن الزر لا يستجيب، غالبًا نسيت…",
        "choices": [
          "new String",
          "addActionListener",
          "toString"
        ],
        "answer": 1,
        "explanation": "الدالة لا تستقبل أحداث زر لم تسجل الاستماع إليه."
      },
      {
        "question": "input.getText() يرجع…",
        "choices": [
          "double",
          "String",
          "JTextField"
        ],
        "answer": 1,
        "explanation": "نحتاج parseInt/parseDouble عندما نريد حسابًا عدديًا."
      }
    ],
    "mode": "swing",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "gui-controls",
    "phase": "advanced",
    "title": "ترتيب الواجهة وخياراتها وقوائمها",
    "shortTitle": "ترتيب الواجهة وخياراتها وقوائمها",
    "minutes": 22,
    "summary": "Flow وGrid وBorder، ثم checkbox وradio وcombo والأحداث الأخرى.",
    "source": "7- GUI/W15_Lec_1chapter7_3-gui.pptx، الشرائح 2–22",
    "objectives": [
      "اختيار layout مناسب",
      "ربط radio buttons في ButtonGroup",
      "قراءة الخيارات وبناء menu بسيط"
    ],
    "sections": [
      {
        "title": "من يرتب الأثاث؟",
        "html": "<ul><li><code>FlowLayout</code>: يضع العناصر بالتتابع ويلف لسطر جديد عند ضيق المساحة.</li><li><code>GridLayout(rows,cols)</code>: خلايا متساوية الحجم. يعبّئ الصف من اليسار لليمين في الاتجاه الافتراضي، ثم الصف التالي.</li><li><code>BorderLayout</code>: NORTH وSOUTH وEAST وWEST وCENTER. غالبًا نضع JPanel في كل منطقة لتجميع عدة عناصر.</li><li><code>setLayout(null)</code> مع <code>setBounds(x,y,w,h)</code> يحدد المكان يدويًا، لكنه أقل مرونة عند تغير حجم الخط أو النافذة.</li></ul><p>يمكن الجمع بين layouts: نافذة BorderLayout، لوحة نموذج GridLayout، ولوحة أزرار FlowLayout. لا تضف عدة عناصر إلى نفس منطقة BorderLayout متوقعًا ظهورها جنبًا لجنب.</p>"
      },
      {
        "title": "اختيارات مستقلة أو واحدة فقط",
        "html": "<pre class=\"language-java\"><code>JCheckBox gift = new JCheckBox(&quot;Gift wrap&quot;);\nJRadioButton small = new JRadioButton(&quot;Small&quot;, true);\nJRadioButton large = new JRadioButton(&quot;Large&quot;);\nButtonGroup sizes = new ButtonGroup();\nsizes.add(small); sizes.add(large);</code></pre><p>checkbox خيار مستقل صح/خطأ. radio لا تصبح مجموعة اختيار واحد إلا بوضعها في ButtonGroup. المجموعة منطقية لا ترسم الأزرار؛ ما زلت تحتاج add لكل زر في panel. اقرأ الحالة بـisSelected().</p>"
      },
      {
        "title": "ComboBox وList وdialog للملفات",
        "html": "<pre class=\"language-java\"><code>JComboBox&lt;String&gt; color = new JComboBox&lt;&gt;(new String[]{&quot;Red&quot;, &quot;Blue&quot;});\nString chosen = (String) color.getSelectedItem();\nJList&lt;String&gt; list = new JList&lt;&gt;(new String[]{&quot;Java&quot;, &quot;Math&quot;});</code></pre><p>JComboBox قائمة منسدلة. JList قائمة قد تسمح بأكثر من اختيار وفق selection mode. JCheckBox وJRadioButton يولدان action وitem events؛ للتعامل مع item events استخدم ItemListener وitemStateChanged. JFileChooser يعرض اختيار ملف؛ إذا showOpenDialog أعاد APPROVE_OPTION تحصل على getSelectedFile، لكن المستخدم قد يلغي.</p>"
      },
      {
        "title": "قائمة File والفأرة",
        "html": "<pre class=\"language-java\"><code>JMenuBar bar = new JMenuBar();\nJMenu file = new JMenu(&quot;File&quot;);\nJMenuItem clearItem = new JMenuItem(&quot;Clear&quot;);\nfile.add(clearItem); bar.add(file); setJMenuBar(bar);\nclearItem.addActionListener(this);</code></pre><p>JMenuBar الشريط، JMenu القائمة، JMenuItem الأمر الذي تسجل له حدثًا. MouseListener يعلن clicked/pressed/released/entered/exited. MouseMotionListener للحركة والسحب. يمكنك extends MouseAdapter وإعادة تعريف الأحداث التي تحتاجها بدل كتابة خمس methods فارغة.</p><pre class=\"language-java\"><code>panel.addMouseListener(new MouseAdapter() {\n    public void mouseClicked(MouseEvent e) {\n        label.setText(e.getX() + &quot;,&quot; + e.getY());\n    }\n});</code></pre>"
      },
      {
        "title": "جرّب اختياراتك",
        "html": "<p>شغّل النموذج: اختر الحجم واللون وgift، ثم اضغط Summary. تأكد أن اختيار Large يلغي Small. هذا يثبت عمل ButtonGroup. غيّر FlowLayout إلى GridLayout وشاهد الأبعاد المتساوية. التدريب النهائي هنا إضافة تكلفة حسب الخيارات.</p>"
      }
    ],
    "starter": "import javax.swing.*;\nimport java.awt.*;\nimport java.awt.event.*;\npublic class Main extends JFrame implements ActionListener {\n    private JRadioButton small = new JRadioButton(\"Small\", true);\n    private JRadioButton large = new JRadioButton(\"Large\");\n    private JCheckBox gift = new JCheckBox(\"Gift wrap\");\n    private JComboBox<String> color = new JComboBox<>(new String[]{\"Red\", \"Blue\"});\n    private JLabel result = new JLabel(\"Choose options\");\n    public Main() {\n        setTitle(\"Order options\"); setSize(430, 220);\n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n        setLayout(new FlowLayout());\n        ButtonGroup group = new ButtonGroup(); group.add(small); group.add(large);\n        JButton summary = new JButton(\"Summary\"); summary.addActionListener(this);\n        add(small); add(large); add(gift); add(color); add(summary); add(result);\n    }\n    public void actionPerformed(ActionEvent e) {\n        result.setText((small.isSelected() ? \"Small\" : \"Large\") + \" \" + color.getSelectedItem() + \" gift=\" + gift.isSelected());\n    }\n    public static void main(String[] args) {\n        SwingUtilities.invokeLater(new Runnable() {\n            public void run() { new Main().setVisible(true); }\n        });\n    }\n}\n",
    "expectedOutput": "",
    "challenge": "<p>اجعل Small سعره 20 وLarge سعره 30. Gift wrap يضيف 5. الزر يعرض السعر الإجمالي. اختبر الخيارات الأربع: 20 و25 و30 و35.</p>",
    "hints": [
      "اقرأ small.isSelected لتحديد السعر الأساسي.",
      "إذا gift.isSelected أضف 5.",
      "int total = small.isSelected() ? 20 : 30; ثم تعديل وإظهار."
    ],
    "solution": "import javax.swing.*;\nimport java.awt.*;\nimport java.awt.event.*;\npublic class Main extends JFrame implements ActionListener {\n    private JRadioButton small = new JRadioButton(\"Small\", true);\n    private JRadioButton large = new JRadioButton(\"Large\");\n    private JCheckBox gift = new JCheckBox(\"Gift wrap\");\n    private JLabel result = new JLabel(\"Total\");\n    public Main() {\n        setTitle(\"Order total\"); setSize(400, 180);\n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); setLayout(new FlowLayout());\n        ButtonGroup group = new ButtonGroup(); group.add(small); group.add(large);\n        JButton button = new JButton(\"Calculate\"); button.addActionListener(this);\n        add(small); add(large); add(gift); add(button); add(result);\n    }\n    public void actionPerformed(ActionEvent e) {\n        int total = small.isSelected() ? 20 : 30;\n        if (gift.isSelected()) total += 5;\n        result.setText(\"Total: \" + total);\n    }\n    public static void main(String[] args) {\n        SwingUtilities.invokeLater(new Runnable() {\n            public void run() { new Main().setVisible(true); }\n        });\n    }\n}\n",
    "quiz": [
      {
        "question": "لماذا ButtonGroup؟",
        "choices": [
          "لإظهار panel",
          "لضمان اختيار radio واحد من المجموعة",
          "لتغيير لون الزر"
        ],
        "answer": 1,
        "explanation": "المجموعة تضبط الاختيار، وإضافة الأزرار للحاوية تضبط ظهورها."
      },
      {
        "question": "أين نضع عدة أزرار في SOUTH من BorderLayout؟",
        "choices": [
          "نضيفها جميعًا مباشرة لنفس SOUTH",
          "نجمعها في JPanel ونضعه في SOUTH"
        ],
        "answer": 1,
        "explanation": "الحاوية الفرعية تجمع عدة عناصر في منطقة واحدة."
      }
    ],
    "mode": "swing",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "linked-lists",
    "phase": "advanced",
    "title": "القائمة المترابطة · عقد وروابط",
    "shortTitle": "القائمة المترابطة",
    "minutes": 23,
    "summary": "نفهم head وtail وننفّذ الإضافة والحذف بحالاتها الثلاث.",
    "source": "8- DS/W15_Lec_2_3_W16_Lec1_chapter8_1data-structures_UPDATED.pptx، الشرائح 2–87؛ 8- DS/W16_lec_2_W17_Lec_1-chapter8_2data-structures_UPDATE.pptx، الشرائح 4–10",
    "objectives": [
      "بناء Node تشير للعقدة التالية",
      "تنفيذ insert/remove على الطرفين",
      "حماية empty وsingle-element cases"
    ],
    "sections": [
      {
        "title": "سلسلة بدل صف ثابت",
        "html": "<p>المصفوفة تصل إلى الخانة مباشرة بالفهرس، وحجمها ثابت بعد إنشائها. linked list سلسلة عقد. كل Node تحتوي data وnext يشير للعقدة التالية. head يشير للأولى وtail للأخيرة، وnext في الأخيرة null. الوصول للعنصر الخامس يتطلب المرور على من قبله.</p>"
      },
      {
        "title": "أصغر عقدة والمرور",
        "html": "<pre class=\"language-java\"><code>class Node {\n    int data;\n    Node next;\n    Node(int data) { this.data = data; }\n}\nNode current = head;\nwhile (current != null) {\n    System.out.println(current.data);\n    current = current.next;\n}</code></pre><p>Node داخلها مرجع Node؛ هذا self-referential class. current يتحرك دون أن نفقد head. لو استخدمت head نفسه للتنقل ومسحته، ستضيع نقطة دخول القائمة. في doubly linked list توجد next وprevious، لكن مثالنا singly.</p>"
      },
      {
        "title": "الإضافة على الطرفين",
        "html": "<pre class=\"language-java\"><code>void insertAtFront(int x) {\n    Node node = new Node(x);\n    node.next = head;\n    head = node;\n    if (tail == null) tail = node;\n}\nvoid insertAtBack(int x) {\n    Node node = new Node(x);\n    if (head == null) head = tail = node;\n    else { tail.next = node; tail = node; }\n}</code></pre><p>في الأمام اربط الجديد بالقديم قبل تغيير head. عند الإضافة لأول عنصر يتساوى head وtail. وجود tail يجعل الإضافة في الخلف بلا بحث عن النهاية. القائمة الفارغة تُعرف من head==null.</p>"
      },
      {
        "title": "الحذف: فارغة، واحدة، عدة",
        "html": "<pre class=\"language-java\"><code>Integer removeFromFront() {\n    if (head == null) return null;\n    int value = head.data;\n    head = head.next;\n    if (head == null) tail = null;\n    return value;\n}\nInteger removeFromBack() {\n    if (head == null) return null;\n    int value = tail.data;\n    if (head == tail) head = tail = null;\n    else {\n        Node current = head;\n        while (current.next != tail) current = current.next;\n        current.next = null;\n        tail = current;\n    }\n    return value;\n}</code></pre><p>Integer هنا يسمح بإرجاع null للقائمة الفارغة؛ int لا يقبل null. في حذف الخلف نحتاج السابق للأخير، فنمر من head. لا نلغي tail فقط ونترك رابط السابق يشير للعنصر المحذوف.</p>"
      },
      {
        "title": "ارسم قبل التعديل",
        "html": "<p>اكتب على ورقة head → 10 → 20 → null وtail عند 20. أدخل 5 في الأمام ثم احذف الخلف. اسأل بعد كل عملية: هل head صحيح؟ هل tail صحيح؟ هل tail.next يساوي null؟ الإدراج عند عقدة معروفة سريع، لكن البحث عن موضعها قد يتطلب المرور على القائمة. لا تفترض أن linked list أوفر ذاكرة دائمًا؛ كل عقدة تحمل روابط إضافية.</p>"
      }
    ],
    "starter": "class Node {\n    int data;\n    Node next;\n    Node(int data) { this.data = data; }\n}\nclass NumberList {\n    private Node head, tail;\n    void insertAtFront(int x) {\n        Node n = new Node(x); n.next = head; head = n;\n        if (tail == null) tail = n;\n    }\n    void insertAtBack(int x) {\n        Node n = new Node(x);\n        if (head == null) head = tail = n;\n        else { tail.next = n; tail = n; }\n    }\n    void print() {\n        for (Node c = head; c != null; c = c.next) System.out.println(c.data);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        NumberList list = new NumberList();\n        list.insertAtBack(10); list.insertAtBack(20); list.insertAtFront(5);\n        list.print();\n    }\n}\n",
    "expectedOutput": "5\n10\n20",
    "challenge": "<p>أضف size() وremoveFromFront() إلى NumberList. ضع 10 ثم 20، اطبع الحجم 2، احذف الأول واطبع 10، ثم الحجم 1. اختبر الحذف حتى تصبح القائمة فارغة ثم مرة أخرى فتعيد null.</p>",
    "hints": [
      "size تمر من head بعداد يبدأ صفرًا.",
      "قبل حذف الأول تحقق head==null.",
      "بعد head=head.next إذا head==null اجعل tail=null أيضًا."
    ],
    "solution": "class Node {\n    int data; Node next;\n    Node(int data) { this.data = data; }\n}\nclass NumberList {\n    private Node head, tail;\n    void insertAtBack(int x) {\n        Node n = new Node(x);\n        if (head == null) head = tail = n;\n        else { tail.next = n; tail = n; }\n    }\n    int size() {\n        int count = 0;\n        for (Node c = head; c != null; c = c.next) count++;\n        return count;\n    }\n    Integer removeFromFront() {\n        if (head == null) return null;\n        int value = head.data;\n        head = head.next;\n        if (head == null) tail = null;\n        return value;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        NumberList list = new NumberList();\n        list.insertAtBack(10); list.insertAtBack(20);\n        System.out.println(list.size());\n        System.out.println(list.removeFromFront());\n        System.out.println(list.size());\n        System.out.println(list.removeFromFront());\n        System.out.println(list.removeFromFront());\n    }\n}\n",
    "quiz": [
      {
        "question": "بعد حذف العنصر الوحيد…",
        "choices": [
          "head=null فقط دائمًا",
          "head وtail يصبحان null",
          "tail فقط يصبح null"
        ],
        "answer": 1,
        "explanation": "كلتا الإشارتين يجب أن تصفا القائمة الفارغة."
      },
      {
        "question": "لماذا نمر بـcurrent بدل تحريك head؟",
        "choices": [
          "لحفظ نقطة بداية القائمة",
          "لأن head عدد",
          "لا فرق في جميع الحالات"
        ],
        "answer": 0,
        "explanation": "تغيير head أثناء القراءة يفقد الوصول للأجزاء السابقة."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "stack-queue",
    "phase": "advanced",
    "title": "Stack وQueue · ترتيب الخروج",
    "shortTitle": "Stack وQueue",
    "minutes": 14,
    "summary": "نفس التخزين يمكن أن يقدم قواعد مختلفة للإضافة والإزالة.",
    "source": "8- DS/W15_Lec_2_3_W16_Lec1_chapter8_1data-structures_UPDATED.pptx، الشرائح 88–95",
    "objectives": [
      "فهم LIFO وFIFO",
      "ربط operations بالقائمة",
      "تتبع push/pop وenqueue/dequeue"
    ],
    "sections": [
      {
        "title": "كومة الصحون وطابور الانتظار",
        "html": "<p>Stack مثل كومة صحون: آخر صحن وضعته هو أول صحن ترفعه. LIFO = Last In First Out. Queue مثل طابور خدمة: أول من دخل أول من يخرج. FIFO = First In First Out. الفرق قاعدة الوصول، وليس شكل بيانات العنصر.</p>"
      },
      {
        "title": "عمليات Stack",
        "html": "<p><code>push</code> إضافة للقمة، <code>pop</code> إزالة وإرجاع القمة، <code>peek</code> إرجاعها دون إزالة. باستخدام linked list نجعل القمة هي head، فالإضافة والحذف من الأمام.</p><pre><code>// stack using a linked list:\npush(x)  -&gt; insertAtFront(x)\npop()    -&gt; removeFromFront()\npeek()   -&gt; read head.data</code></pre><p>هذه أسطر وصفية لربط الفكرة وليست Java تُنسخ للتشغيل. الكود الفعلي في المحرر يستخدم deque من مكتبة Java.</p>"
      },
      {
        "title": "عمليات Queue",
        "html": "<p>enqueue يضيف إلى الخلف، وdequeue يزيل من الأمام. مع head وtail نضيف في tail ونزيل head. إذا أضفت 10 ثم20 ثم30، فالخارج من Queue هو10، والخارج من Stack هو30.</p><p>الطابور الفارغ يحتاج سياسة محددة: استثناء أو null أو فحص مسبق. اتبع ما يطلبه السؤال. لا تقرأ head.data قبل فحص الفراغ.</p>"
      },
      {
        "title": "Java جاهزة للفهم والتجربة",
        "html": "<p><strong>هذا عرض للمكتبة خارج قيود الاختبارات الأربعة.</strong> النماذج المتاحة في الموقع تمنع Java Collections؛ عند حلها استخدم المصفوفة المطلوبة، ولا تستخدم ArrayDeque أو ArrayList أو LinkedList الجاهزة. هنا ندرس فكرة Stack/Queue ضمن بقية المقرر، ويمكن تنفيذها بعقد Node من الدرس السابق.</p><pre class=\"language-java\"><code>Deque&lt;Integer&gt; stack = new ArrayDeque&lt;&gt;();\nstack.push(10); stack.push(20);\nSystem.out.println(stack.pop());\nQueue&lt;Integer&gt; queue = new ArrayDeque&lt;&gt;();\nqueue.offer(10); queue.offer(20);\nSystem.out.println(queue.poll());</code></pre><p>Deque تدعم العمل من الطرفين. offer يضيف وpoll يزيل أو يعيد null إذا فارغ. remove يرمي استثناء عند الفراغ. pop يرمي أيضًا إذا Stack فارغة. نستخدم Integer داخل &lt;&gt; لأن generics تعمل مع أنواع مرجعية، وسنفصلها في الدرس التالي.</p>"
      },
      {
        "title": "تتبع مختلط",
        "html": "<p>Stack: push(1),push(2),pop(),push(3),pop() تعيد 2 ثم3 ويبقى1. Queue مع إدخال نفس التسلسل وإزالة واحدة ثم إدخال3، تخرج1 ثم2 ويبقى3. اكتب توقعك قبل تشغيل عمليات مختلطة؛ هذا أفضل اختبار لفهم قاعدة الترتيب.</p>"
      }
    ],
    "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Deque<Integer> stack = new ArrayDeque<>();\n        Queue<Integer> queue = new ArrayDeque<>();\n        for (int x = 1; x <= 3; x++) { stack.push(x); queue.offer(x); }\n        System.out.println(\"Stack: \" + stack.pop());\n        System.out.println(\"Queue: \" + queue.poll());\n    }\n}\n",
    "expectedOutput": "Stack: 3\nQueue: 1",
    "challenge": "<p>استخدم Stack (Deque) لعكس الأرقام 1 و2 و3 و4. أدخلها بالترتيب ثم أزل واطبع حتى تصبح فارغة؛ الناتج 4 ثم3 ثم2 ثم1، كل رقم بسطر.</p>",
    "hints": [
      "أدخل داخل for باستخدام push.",
      "افحص !stack.isEmpty() قبل pop.",
      "حلقة while تطبع stack.pop() في كل دورة."
    ],
    "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Deque<Integer> stack = new ArrayDeque<>();\n        for (int i = 1; i <= 4; i++) stack.push(i);\n        while (!stack.isEmpty()) System.out.println(stack.pop());\n    }\n}\n",
    "quiz": [
      {
        "question": "Stack بعد push(10),push(20),pop() تعيد…",
        "choices": [
          "10",
          "20",
          "null"
        ],
        "answer": 1,
        "explanation": "آخر عنصر دخل هو أول عنصر يخرج."
      },
      {
        "question": "Queue بالـlinked list تضيف وتحذف من…",
        "choices": [
          "الأمام والأمام",
          "الخلف والأمام",
          "الخلف والخلف"
        ],
        "answer": 1,
        "explanation": "نضيف إلى tail ونزيل من head لتحقيق FIFO."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "generics",
    "phase": "advanced",
    "title": "Generics · نفس القالب لأنواع مختلفة",
    "shortTitle": "Generics",
    "minutes": 14,
    "summary": "نكتب Box<T> مرة واحدة ويحمينا المترجم من خلط الأنواع.",
    "source": "8- DS/W16_lec_2_W17_Lec_1-chapter8_2data-structures_UPDATE.pptx، الشرائح 11–25",
    "objectives": [
      "تعريف generic class",
      "استخدام Integer بدل int داخل <>",
      "فهم generic methods وحدود المصفوفات"
    ],
    "sections": [
      {
        "title": "مشكلة Object العام",
        "html": "<p>لو Box تخزن Object فيمكنك وضع String ثم تحاول قراءتها كـInteger؛ الخطأ قد يتأخر إلى وقت التشغيل. Generics تسمح بتحديد النوع عند الاستخدام، فيرفض المترجم إدخال نوع مخالف. نكتب صندوقًا واحدًا، ثم Box&lt;String&gt; وBox&lt;Integer&gt;.</p>"
      },
      {
        "title": "حرف يمثل نوعًا",
        "html": "<pre class=\"language-java\"><code>class Box&lt;T&gt; {\n    private T value;\n    public Box(T value) { this.value = value; }\n    public T get() { return value; }\n    public void set(T value) { this.value = value; }\n}</code></pre><p>T اسم type parameter، كأنه خانة لاسم النوع. يمكن تسميته E أو V؛ T للنوع وE للعناصر شائعان. عند Box&lt;String&gt; يفهم المترجم أن get تعيد String وأن set تستقبل String.</p>"
      },
      {
        "title": "إنشاء واستعمال",
        "html": "<pre class=\"language-java\"><code>Box&lt;Integer&gt; number = new Box&lt;&gt;(113);\nint n = number.get();\nBox&lt;String&gt; word = new Box&lt;&gt;(&quot;Java&quot;);\nString s = word.get();</code></pre><p>نستخدم Integer بدل int لأن نوع generic يجب أن يكون مرجعيًا. autoboxing تحول int إلى Integer عند الحاجة وunboxing تعيده. لا نحتاج cast من Object. حذف نوع generic واستخدام Box خامًا يلغي كثيرًا من حماية الأنواع.</p>"
      },
      {
        "title": "دالة عامة وعقدة عامة",
        "html": "<pre class=\"language-java\"><code>static &lt;T&gt; void printAll(T[] items) {\n    for (T item : items) System.out.println(item);\n}\nclass Node&lt;T&gt; {\n    T data;\n    Node&lt;T&gt; next;\n    Node(T data) { this.data = data; }\n}</code></pre><p>في الدالة العامة تأتي &lt;T&gt; قبل نوع الإرجاع. حرف T الذي تعلنه الدالة مستقل عن type parameter للكلاس حتى لو تشابه الاسم؛ تجنب تشابه الأسماء إذا كان سيشوّش المعنى. لا تستطيع كتابة new T[10] مباشرة. يستطيع المتغير أن يكون T[] لكن إنشاء مصفوفة generic له قيود؛ استخدم تصميمًا واضحًا بدل cast غير آمن بلا فهم.</p>"
      },
      {
        "title": "تأكد من الحماية",
        "html": "<p>في المثال جرّب number.set(\"oops\")؛ يجب أن يرفض المترجم قبل التشغيل. أزل السطر بعد فهم السبب. هذا نفع generics: الخطأ يظهر مبكرًا. انتبه أن Box&lt;Integer&gt; ليست subtype من Box&lt;Number&gt; لمجرد أن Integer subtype من Number.</p>"
      }
    ],
    "starter": "class Box<T> {\n    private T value;\n    public Box(T value) { this.value = value; }\n    public T get() { return value; }\n    public void set(T value) { this.value = value; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Box<Integer> number = new Box<>(113);\n        Box<String> word = new Box<>(\"Java\");\n        System.out.println(number.get());\n        System.out.println(word.get());\n    }\n}\n",
    "expectedOutput": "113\nJava",
    "challenge": "<p>اكتب Pair&lt;T&gt; لها first وsecond، constructor بمدخلين، وgetFirst وgetSecond. أنشئ Pair&lt;String&gt;(\"CS\",\"113\") واطبع CS113 عبر جمع القيمتين.</p>",
    "hints": [
      "كل field نوعه T.",
      "اسم المنشئ Pair دون <T> في تعريفه.",
      "عند الاستخدام اكتب Pair<String> pair = new Pair<>(\"CS\", \"113\")."
    ],
    "solution": "class Pair<T> {\n    private T first, second;\n    public Pair(T first, T second) { this.first = first; this.second = second; }\n    public T getFirst() { return first; }\n    public T getSecond() { return second; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Pair<String> pair = new Pair<>(\"CS\", \"113\");\n        System.out.println(pair.getFirst() + pair.getSecond());\n    }\n}\n",
    "quiz": [
      {
        "question": "أي نوع صحيح؟",
        "choices": [
          "Box<int>",
          "Box<Integer>",
          "Box<void>"
        ],
        "answer": 1,
        "explanation": "generics تحتاج أنواعًا مرجعية، وInteger الغلاف المرجعي لـint."
      },
      {
        "question": "فائدة generics الأساسية هنا؟",
        "choices": [
          "منع كل أخطاء المنطق",
          "فحص الأنواع مبكرًا وتقليل casts",
          "تسريع كل البرامج تلقائيًا"
        ],
        "answer": 1,
        "explanation": "تُظهر خلط الأنواع في الترجمة بدل انتظار فشل التحويل."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "recursion",
    "phase": "lab",
    "title": "الاستدعاء الذاتي · الأكبر والأصغر بلا حلقة",
    "shortTitle": "الاستدعاء الذاتي",
    "minutes": 25,
    "summary": "نفك أصعب جزء متكرر في الاختبارات إلى حالة توقف وخطوة صغيرة.",
    "source": "9- Recursion/W17_Lec_2_3_chapter9_UPDATE.pptx، الشرائح 3–31",
    "objectives": [
      "تصميم base case وrecursive step",
      "تتبع رجوع الاستدعاءات",
      "كتابة recursive max/min لمصفوفة الجزء المستخدم"
    ],
    "sections": [
      {
        "title": "فكرة بسيطة: حل جزءًا أصغر",
        "html": "<p>Recursion دالة تستدعي نفسها على مسألة أصغر. تحتاج شيئين: حالة توقف base case نعرف جوابها فورًا، وخطوة recursive تقرّبنا منها. مثل جمع أول n أعداد: مجموع أول n-1 ثم إضافة n. إذا لم يصغر n أو غابت حالة التوقف تتراكم الاستدعاءات حتى StackOverflowError.</p>"
      },
      {
        "title": "ابدأ بمثال يمكن تتبعه",
        "html": "<pre class=\"language-java\"><code>static int sum(int n) {\n    if (n == 0) return 0;\n    return n + sum(n - 1);\n}</code></pre><p>نفترض n غير سالب. sum(3) تطلب 3+sum(2)، ثم sum(2) تطلب 2+sum(1)، ثم 1+sum(0). عند sum(0) الجواب0. الآن نرجع: sum(1)=1، sum(2)=3، sum(3)=6. كل استدعاء يحتفظ بقيمته المحلية ولا يضيع n السابق.</p><p>للطباعة الترتيب مهم: إذا طبعت قبل الاستدعاء تظهر القيم أثناء النزول، وإذا طبعت بعده تظهر أثناء الرجوع. factorial لها base 0!=1، ثم n*fact(n-1).</p>"
      },
      {
        "title": "الأكبر بين أول n عناصر",
        "html": "<pre class=\"language-java\"><code>static int max(int[] a, int n) {\n    if (n == 1) return a[0];\n    int bestOfRest = max(a, n - 1);\n    if (a[n - 1] &gt; bestOfRest) return a[n - 1];\n    return bestOfRest;\n}</code></pre><p>n هنا عدد العناصر وليس فهرسًا. أول n عناصر تنتهي عند الفهرس n-1. إذا بقي عنصر واحد فالجواب a[0]. وإلا اطلب الأكبر بين العناصر السابقة، ثم قارنه بالعنصر الأخير. استدعِ max(a,a.length) للمصفوفة الممتلئة، وmax(a,count) للجزء المستخدم.</p><p>تتبّع {4,9,2}: max(3) ينتظر max(2)، وmax(2) ينتظر max(1)=4. عند الرجوع نقارن9 مع4 فيفوز9، ثم2 مع9 فيبقى9. مع {-4,-9,-2} الأكبر -2؛ لذلك لا تستخدم0 كجواب أساسي عشوائي.</p>"
      },
      {
        "title": "من أعداد إلى كائنات الاختبار",
        "html": "<pre class=\"language-java\"><code>// items is a non-empty interface array; n &lt;= count\nprivate double maxCost(int n) {\n    if (n == 1) return ((Booking) items[0]).cost();\n    double previous = maxCost(n - 1);\n    double current = ((Booking) items[n - 1]).cost();\n    return current &gt; previous ? current : previous;\n}</code></pre><p>القالب نفسه؛ فقط بدل a[i] نقرأ الخاصية أو نستدعي حساب الكائن. إن كانت cost معلنة في interface لا تحتاج cast لها. أما خاصية الأب غير المعلنة في interface فتحتاج التحويل الصحيح. الأصغر نفس المنطق مع &lt; بدل &gt;. إذا المطلوب إعادة كائن، احتفظ بمرجع أفضل كائن وقارن قيمه، لا ترجع double بدلًا منه.</p><p>لو التوقيع المطلوب يستخدم index يبدأ0، تكون حالة التوقف مثل index==count-1، والاستدعاء index+1. لا تخلط نسختي count وindex. اكتب معنى المدخل في تعليق قبل البرمجة.</p>"
      },
      {
        "title": "حماية الفراغ واختبار الاستقلال",
        "html": "<p>الدالة التي تفترض n≥1 تحتاج من المستدعي فحص العدد. إذا count==0 طبّق ما طلبه السؤال: استثناء أو قيمة محددة. لا تستدع n-1 إلى قيم سالبة. جرّب عنصرًا واحدًا، عدة عناصر، قيمًا متساوية، وقيمًا سالبة. لا تستبدل recursion بحلقة إذا نص السؤال يشترط recursion؛ حتى لو الناتج صحيح قد لا تحقق المطلوب.</p><p>لتمارين السلايدات: طباعة مصفوفة تنتهي عند index==length، مجموعها يرجع0 عند n==0، وmax لمصفوفة غير فارغة تنتهي عند n==1. Fibonacci البسيطة تستدعي بعض المسائل مرتين فتكرر العمل كثيرًا؛ ليست كل recursion أفضل من loop.</p>"
      },
      {
        "title": "تمارين السلايدات على النصوص",
        "html": "<p>بعد إتقان max/min جرّب آخر شريحة من فصل recursion. لعكس نص نحل النص بلا أول حرف ثم نلحق أول حرف في النهاية. نفترض النص غير null، ونوقف عند طول صفر أو واحد.</p><pre class=\"language-java\"><code>static String reverse(String s) {\n    if (s.length() &lt;= 1) return s;\n    return reverse(s.substring(1)) + s.charAt(0);\n}</code></pre><p>لتساوي نصين: إذا اختلف الطول فهما مختلفان، وإذا أصبح الطول صفرًا تساويا، وإلا قارن آخر حرف ثم أعد المقارنة على الأجزاء الأقصر. len1 وlen2 هنا عدد الحروف المستخدمة من البداية، ويجب أن يكونا بين صفر وطول النص المقابل.</p><pre class=\"language-java\"><code>static boolean same(String a, String b, int len1, int len2) {\n    if (len1 != len2) return false;\n    if (len1 == 0) return true;\n    return a.charAt(len1 - 1) == b.charAt(len2 - 1)\n        &amp;&amp; same(a, b, len1 - 1, len2 - 1);\n}</code></pre><p>تجارب مقترحة: reverse(\"CSC113\") ترجع \"311CSC\". وsame(\"Java\",\"Java\",4,4) تعيد true، وsame(\"Java\",\"java\",4,4) تعيد false. اكتب trace صغيرًا قبل تشغيلهما.</p>"
      }
    ],
    "starter": "public class Main {\n    static int max(int[] values, int n) {\n        if (n < 1 || n > values.length) throw new IllegalArgumentException(\"Invalid count\");\n        if (n == 1) return values[0];\n        int previous = max(values, n - 1);\n        return values[n - 1] > previous ? values[n - 1] : previous;\n    }\n    public static void main(String[] args) {\n        int[] values = {-4, -9, -2};\n        System.out.println(max(values, values.length));\n    }\n}\n",
    "expectedOutput": "-2",
    "challenge": "<p>اكتب <code>static int min(int[] values, int n)</code> بشكل recursive بلا loops؛ n عدد أول العناصر المستخدمة. ارفض n&lt;1 أو n&gt;length. اختبر {8,3,9,-2,-100} مع n=4 ثم n=1؛ الناتج -2 ثم8. لا تدخل -100 في البحث الأول؛ وجوده يكشف لو بحثت في كامل السعة بدل أول n عناصر.</p>",
    "hints": [
      "حالة عنصر واحد تعيد values[0].",
      "min(values,n-1) يعطي أصغر الجزء السابق.",
      "قارن values[n-1] مع الجواب السابق وأعد الأصغر باستخدام <."
    ],
    "solution": "public class Main {\n    static int min(int[] values, int n) {\n        if (n < 1 || n > values.length) throw new IllegalArgumentException(\"Invalid count\");\n        if (n == 1) return values[0];\n        int previous = min(values, n - 1);\n        return values[n - 1] < previous ? values[n - 1] : previous;\n    }\n    public static void main(String[] args) {\n        int[] values = {8, 3, 9, -2, -100};\n        System.out.println(min(values, 4));\n        System.out.println(min(values, 1));\n    }\n}\n",
    "quiz": [
      {
        "question": "n عدد العناصر، أي عنصر نقارنه بعد نتيجة max(n-1)؟",
        "choices": [
          "a[n]",
          "a[n-1]",
          "a[n+1]"
        ],
        "answer": 1,
        "explanation": "أول n عناصر فهارسها 0 إلى n-1."
      },
      {
        "question": "لماذا base case للأكبر ليست return 0 دائمًا؟",
        "choices": [
          "لأنها أبطأ",
          "لأن جميع القيم قد تكون سالبة",
          "لأن return ممنوع"
        ],
        "answer": 1,
        "explanation": "الصفر قد لا يكون موجودًا ويكون أكبر من كل القيم، فينتج جواب خاطئ."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "integrated-lab",
    "phase": "lab",
    "title": "المختبر الجامع · نظام حجوزات صغير",
    "shortTitle": "المختبر الجامع",
    "minutes": 35,
    "summary": "تدريب جديد يجمع العقد والأب والابنين والمدير والاستثناء وrecursion.",
    "source": "4- Interface/W6_Lec_2_3-chapter5-interfaces_UPDATED.pptx؛ 3- Polymorhisim/W4_Lec_3&W5_Lec_1_2_3-W6-1chapter13-polymorphism-UPDATE.pptx؛ 1- Objects and methods/W2_Lec_2_3-Ch1-2_Arrays of Objects.pptx؛ 5- Exception/W9_Lec_1_2_3-chapter6-exceptions_3_UPDATED_22.pptx؛ 9- Recursion/W17_Lec_2_3_chapter9_UPDATE.pptx (تمرين أصلي يجمع المهارات)",
    "objectives": [
      "بناء مشروع من وصف مستقل",
      "ربط interface[] بالـabstract base",
      "التحقق من duplicate/remove/recursive extreme"
    ],
    "sections": [
      {
        "title": "قبل كتابة أول سطر",
        "html": "<p>هذا تمرين كامل جديد، وليس أحد الاختبارات الأربعة. اقرأ المطلوب وحدد أسماء الكلاسات وتواقيع الدوال. اكتب قائمة تحقق، ثم أنجز جزءًا صغيرًا وشغله. لا تنتظر نهاية كل المشروع لتضغط Run. الهدف أن تبني الحل بنفسك، ثم تقارنه بالحل المخفي بعد محاولة جادة.</p>"
      },
      {
        "title": "العقد والأب والابنان",
        "html": "<ul><li><code>Bookable</code>: تعلن double cost() وvoid confirm().</li><li><code>Booking</code> abstract implements Bookable: حقلا protected id:String وbasePrice:double؛ منشئ يرفض السعر السالب وكذلك id الفارغ أو null بـIllegalArgumentException. getId وtoString، وequals(Booking other) يقارن id.</li><li><code>StandardBooking</code>: cost تعيد basePrice. confirm تطبع id ثم confirmed.</li><li><code>VipBooking</code>: cost تعيد basePrice+50. confirm تطبع id ثم VIP confirmed.</li></ul><p>اكتب Booking أولًا بعد interface. أبقِ cost وconfirm بلا تنفيذ في abstract إذا تركتهما للابنين. كل ابن يحافظ على التوقيع public.</p>"
      },
      {
        "title": "المدير والسعة والتكرار",
        "html": "<ul><li><code>BookingOffice</code>: Bookable[] items وint count، والمنشئ يستقبل capacity ويرفض السالب، ويسمح بالصفر في هذا التمرين تحديدًا. اتبع شرط السعة المختلف في ورقة الاختبار عند حلها.</li><li><code>add(Bookable b)</code>: ارفض null أو نوعًا ليس Booking؛ ارفض الامتلاء وid مكررًا، وإلا خزّن المرجع وزِد count وأعد true.</li><li><code>remove(String id)</code>: ابحث ثم احذف بتحريك العناصر لليسار، أنقص count وامسح آخر مرجع.</li><li><code>confirmAll()</code>: استدع confirm لكل عنصر مستخدم.</li><li><code>maxCost()</code>: ارفض الفراغ بـIllegalStateException، ثم استخدم helper recursive على أول count عناصر.</li></ul><p>لأن equals(Booking) typed overload، عند مقارنة عنصرين من Bookable[] حوّل الطرفين إلى Booking بعد ضمان النوع. أما cost وconfirm فموجودتان في الواجهة وتستدعيهما مباشرة.</p>"
      },
      {
        "title": "خطة تنفيذ تمنع التشتت",
        "html": "<p>ابدأ بإنشاء StandardBooking واحد واطبع cost. بعدها VipBooking واختبر polymorphism عبر Bookable. ثم أضف BookingOffice واختبر add وحدها. بعد نجاحها اكتب remove واختبر ترتيب العناصر. أخيرًا recursion والاستثناءات. كل مرحلة تستخدم مرحلة نجحت بالفعل.</p><p>ترتيب ملفات Eclipse المقترح: Bookable.java، Booking.java، StandardBooking.java، VipBooking.java، BookingOffice.java، Main.java. داخل الموقع يمكنك إبقاء Main public والبقية دون public في نفس الملف.</p>"
      },
      {
        "title": "ما الذي يثبت أنك فهمت؟",
        "html": "<p>حل الحالات: إضافة رقم مكرر، امتلاء السعة، حذف اسم غير موجود، حذف أول عنصر ثم إضافة جديد، أكبر تكلفة قبل الحذف وبعده، سعر سالب، مكتب فارغ. إذا نجح المثال الطبيعي فقط فالحل لم يختبر الحدود بعد. عند القراءة اسأل: هل الدالة ترجع boolean أم تطبع؟ هل تغير count فقط عند النجاح؟ هل helper تنتهي؟</p>"
      }
    ],
    "starter": "interface Bookable {\n    double cost();\n    void confirm();\n}\nabstract class Booking implements Bookable {\n    protected String id;\n    protected double basePrice;\n    public Booking(String id, double basePrice) {\n        if (basePrice < 0) throw new IllegalArgumentException(\"Negative price\");\n        this.id = id; this.basePrice = basePrice;\n    }\n    public String getId() { return id; }\n    public boolean equals(Booking other) { return other != null && id.equals(other.id); }\n}\nclass StandardBooking extends Booking {\n    StandardBooking(String id, double price) { super(id, price); }\n    public double cost() { return basePrice; }\n    public void confirm() { System.out.println(id + \" confirmed\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Bookable b = new StandardBooking(\"A\", 100);\n        System.out.println(b.cost());\n        b.confirm();\n        // Add VipBooking and BookingOffice yourself.\n    }\n}\n",
    "expectedOutput": "100.0\nA confirmed",
    "challenge": "<p>أكمل النظام بالوصف أعلاه. في main أنشئ مكتبًا سعته3؛ أضف Standard A بسعر100 وVIP B بسعر120 ثم حاول A مجددًا. اطبع نتائج الإضافات true,true,false. اطبع maxCost=170.0، ثم confirmAll، احذف A واطبع true ثم maxCost=170.0. اختبر سعرًا سالبًا في try/catch وأظهر Negative price.</p>",
    "hints": [
      "ابدأ VipBooking، ثم BookingOffice fields والconstructor، ثم add. لا تحاول كتابة الستة دفعة واحدة.",
      "تكرار id: ((Booking)items[i]).equals((Booking)b). الحذف يتبع نموذج shift من درس المصفوفات.",
      "maxCost helper: n==1 تعيد items[0].cost()؛ قارن items[n-1].cost() مع helper(n-1)."
    ],
    "solution": "interface Bookable {\n    double cost();\n    void confirm();\n}\nabstract class Booking implements Bookable {\n    protected String id;\n    protected double basePrice;\n    public Booking(String id, double basePrice) {\n        if (id == null || id.isEmpty()) throw new IllegalArgumentException(\"Missing id\");\n        if (basePrice < 0) throw new IllegalArgumentException(\"Negative price\");\n        this.id = id; this.basePrice = basePrice;\n    }\n    public String getId() { return id; }\n    public boolean equals(Booking other) { return other != null && id.equals(other.id); }\n    public String toString() { return id + \" cost=\" + cost(); }\n}\nclass StandardBooking extends Booking {\n    StandardBooking(String id, double price) { super(id, price); }\n    public double cost() { return basePrice; }\n    public void confirm() { System.out.println(id + \" confirmed\"); }\n}\nclass VipBooking extends Booking {\n    VipBooking(String id, double price) { super(id, price); }\n    public double cost() { return basePrice + 50; }\n    public void confirm() { System.out.println(id + \" VIP confirmed\"); }\n}\nclass BookingOffice {\n    private Bookable[] items;\n    private int count;\n    BookingOffice(int capacity) {\n        if (capacity < 0) throw new IllegalArgumentException(\"Negative capacity\");\n        items = new Bookable[capacity];\n    }\n    public boolean add(Bookable b) {\n        if (!(b instanceof Booking) || count == items.length) return false;\n        for (int i = 0; i < count; i++)\n            if (((Booking) items[i]).equals((Booking) b)) return false;\n        items[count++] = b;\n        return true;\n    }\n    public boolean remove(String id) {\n        for (int i = 0; i < count; i++) {\n            if (((Booking) items[i]).getId().equals(id)) {\n                for (int j = i; j < count - 1; j++) items[j] = items[j + 1];\n                items[--count] = null;\n                return true;\n            }\n        }\n        return false;\n    }\n    public void confirmAll() {\n        for (int i = 0; i < count; i++) items[i].confirm();\n    }\n    public double maxCost() {\n        if (count == 0) throw new IllegalStateException(\"Empty office\");\n        return maxCost(count);\n    }\n    private double maxCost(int n) {\n        if (n == 1) return items[0].cost();\n        double previous = maxCost(n - 1);\n        return items[n - 1].cost() > previous ? items[n - 1].cost() : previous;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        BookingOffice office = new BookingOffice(3);\n        System.out.println(office.add(new StandardBooking(\"A\", 100)));\n        System.out.println(office.add(new VipBooking(\"B\", 120)));\n        System.out.println(office.add(new StandardBooking(\"A\", 80)));\n        System.out.println(office.maxCost());\n        office.confirmAll();\n        System.out.println(office.remove(\"A\"));\n        System.out.println(office.maxCost());\n        try { new VipBooking(\"X\", -1); }\n        catch (IllegalArgumentException e) { System.out.println(e.getMessage()); }\n    }\n}\n",
    "quiz": [
      {
        "question": "لماذا cast في مقارنة equals هنا؟",
        "choices": [
          "لزيادة السرعة",
          "لاختيار equals(Booking) بدل equals(Object) من مرجع الواجهة",
          "لإنشاء نسخة"
        ],
        "answer": 1,
        "explanation": "نوع المستقبل والمدخل يؤثر في اختيار overload وقت الترجمة."
      },
      {
        "question": "بعد حذف A مع shift، أين B؟",
        "choices": [
          "الخانة0",
          "الخانة1 مع فجوة",
          "يحذف معها"
        ],
        "answer": 0,
        "explanation": "التحريك يحافظ على الجزء المستخدم متصلًا من صفر إلى count-1."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "debugging",
    "phase": "lab",
    "title": "فك سؤال اللاب وتصحيح الكود",
    "shortTitle": "فك سؤال اللاب وتصحيح الكود",
    "minutes": 15,
    "summary": "ترجم المتطلبات إلى جدول، ثم اقرأ أول خطأ بدل مطاردة الأعراض.",
    "source": "1- Objects and methods/W2_Lec_2_3-Ch1-2_Arrays of Objects.pptx؛ 3- Polymorhisim/W4_Lec_3&W5_Lec_1_2_3-W6-1chapter13-polymorphism-UPDATE.pptx؛ 5- Exception/W9_Lec_1_2_3-chapter6-exceptions_3_UPDATED_22.pptx (إرشادات تطبيقية مبنية على أنماط التمارين)",
    "objectives": [
      "تحويل الوصف إلى checklist",
      "تمييز خطأ الصياغة والتنفيذ والمنطق",
      "اختبار الحالات الحدودية"
    ],
    "sections": [
      {
        "title": "اقرأ المطلوب على ثلاث مرات",
        "html": "<p>المرة الأولى افهم القصة العامة فقط. الثانية استخرج أسماء الكلاسات والحقول والتواقيع والعلاقات. الثالثة ضع علامة على الكلمات المؤثرة: abstract، interface، recursively، duplicate، shift، last element، throws. الكلمة الصغيرة قد تغيّر حل دالة كاملة.</p><p>اكتب لكل method: ماذا تستقبل؟ ماذا تعيد؟ هل تغير state؟ ما شرط الخطأ؟ مثال remove: id يدخل، boolean يخرج، count ينقص عند النجاح، والترتيب يعتمد على shift أو swap المطلوب.</p>"
      },
      {
        "title": "ابدأ الهيكل ثم الجسم",
        "html": "<p>اكتب interface ثم abstract base ثم subclasses ثم manager ثم main. استخدم الأسماء والحروف كما في السؤال. أنشئ التواقيع الدقيقة قبل التفاصيل. لا تجعل setter يعيد double بدل void، ولا تجعل equals(Device) تتحول إلى equals(Lamp) بالاجتهاد. نفذ ثم شغّل بعد كل كلاس أو دالة.</p>"
      },
      {
        "title": "اقرأ رسالة الخطأ كدليل",
        "html": "<ul><li><code>cannot find symbol</code>: اسم مكتوب خطأ، import ناقصة، أو متغير خارج نطاقه.</li><li><code>constructor ... cannot be applied</code>: عدد/أنواع المدخلات لا تطابق المنشئ، أو super() غير موجودة.</li><li><code>non-static ... from static context</code>: تحاول استخدام حالة كائن من main دون كائن. أنشئ الكائن واستدع method منه.</li><li><code>does not override abstract method</code>: دالة مفقودة أو توقيع/حرف مختلف أو public ناقصة.</li><li><code>unreported exception</code>: checked exception تحتاج catch أو throws.</li><li><code>incompatible types</code>: تخلط بين نوعين أو تعيد نوعًا غير المطلوب.</li></ul><p>أصلح أول خطأ ثم أعد الترجمة؛ خطأ قوس واحد قد ينتج عشر رسائل لاحقة.</p>"
      },
      {
        "title": "اختبار المنطق لا يحتاج مشروعًا آخر",
        "html": "<p>التشغيل بلا استثناء لا يثبت صحة النتيجة. اكتب قيمًا تعرف أجوبتها. max بين100 و150 يجب150. add مكرر يجب false إذا هذا العقد. delete غير موجود يجب ألا يغيّر count. اختبر مصفوفة سعة0، فارغة، عنصرًا واحدًا، ممتلئة، وقيمًا متساوية. لا تبدأ recursion من array.length إن count أصغر.</p><p>في Eclipse يمكن وضع breakpoint على الهامش وتشغيل Debug As ثم Step Over لمتابعة التنفيذ. حتى دون debugger، اطبع i وcount مؤقتًا لتشاهد تغيرها، ثم أزل الطباعة غير المطلوبة قبل التسليم.</p>"
      },
      {
        "title": "الانتقال من التدريب للاستقلال",
        "html": "<p>حل اختبارًا سابقًا دون فتح الحل، وبوقت محدد، ثم شغّله على حالات إضافية. سجّل سبب كل خطأ بجملة: «قارنت String بـ==» أو «نسيت count بعد الحذف». أعد الجزء الذي أخطأت فيه من الصفر. فتح الحل ثم نسخه يعطيك ملفًا يعمل، لكنه لا يقيس قدرتك يوم الاختبار.</p>"
      }
    ],
    "starter": "public class Main {\n    static int find(int[] values, int target) {\n        for (int i = 0; i < values.length; i++) {\n            if (values[i] == target) return i;\n            return -1; // A logical bug: exits too early.\n        }\n        return -1;\n    }\n    public static void main(String[] args) {\n        System.out.println(find(new int[]{4, 9, 2}, 9));\n    }\n}\n",
    "expectedOutput": "-1",
    "challenge": "<p>الكود يعمل لكنه يطبع -1 بدل1. أصلحه دون تغيير المصفوفة أو target، ثم أضف تجربة target=7 لتطبع -1. اشرح لنفسك لماذا الإصلاح صحيح لكل موضع.</p>",
    "hints": [
      "تتبع i=0: أول قيمة4 مختلفة عن9، ماذا يحدث بعدها؟",
      "return -1 داخل الحلقة ينهي البحث قبل فحص الخانة1.",
      "احذف return -1 من جسم الحلقة واحتفظ بالتي بعد الحلقة."
    ],
    "solution": "public class Main {\n    static int find(int[] values, int target) {\n        for (int i = 0; i < values.length; i++) {\n            if (values[i] == target) return i;\n        }\n        return -1;\n    }\n    public static void main(String[] args) {\n        int[] values = {4, 9, 2};\n        System.out.println(find(values, 9));\n        System.out.println(find(values, 7));\n    }\n}\n",
    "quiz": [
      {
        "question": "برنامج يترجم ويطبع جوابًا خاطئًا لديه…",
        "choices": [
          "خطأ منطق غالبًا",
          "خطأ فاصلة دائمًا",
          "لا خطأ"
        ],
        "answer": 0,
        "explanation": "المترجم يفحص صياغة وأنواعًا، ولا يعرف النتيجة التي يطلبها السؤال."
      },
      {
        "question": "ماذا تفعل عند عشر رسائل بعد تعديل قوس؟",
        "choices": [
          "أغيّر كل الكلاسات",
          "أصلح أول خطأ وأعيد الترجمة",
          "أضيف catch(Exception)"
        ],
        "answer": 1,
        "explanation": "خطأ مبكر قد يسبب سلسلة رسائل تابعة."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  },
  {
    "id": "eclipse",
    "phase": "lab",
    "title": "الانتقال إلى Eclipse والمحاولة النهائية",
    "shortTitle": "الانتقال إلى Eclipse والمحاولة النهائية",
    "minutes": 12,
    "summary": "نفس Java، ملفات منظمة، ثم اختبار مستقل تقيس به جاهزيتك.",
    "source": "Eclipse Packages الرسمية ودليل Creating your first Java project؛ تحقق 11 نوفمبر 2026",
    "objectives": [
      "إنشاء Java Project وكلاسات منفصلة",
      "تشغيل main وإيجاد console",
      "حفظ ملفات المصدر مع ملاحظات التحقق"
    ],
    "sections": [
      {
        "title": "ماذا تنزّل؟",
        "html": "<p>استخدم موقع Eclipse الرسمي واختر Eclipse IDE for Java Developers لنظام جهازك ومعماريته. حزم Eclipse الرسمية الحالية تتضمن Java runtime، فلا تحتاج تثبيت Java إضافية لمجرد بدء الحزمة المرفقة. اختر macOS AArch64 لأجهزة Apple Silicon أو x86_64 لأجهزة Intel، أو النسخة المناسبة لنظامك. راجع <a href=\"https://www.eclipse.org/downloads/packages/\" target=\"_blank\" rel=\"noopener\">حزم Eclipse الرسمية</a>. أسماء الشاشات قد تختلف قليلًا بين الإصدارات، لكن الفكرة واحدة: workspace للمشاريع، project للكود، وsrc لملفات Java.</p><p>هدفنا بعد التدريب أنك تنفذ الاختبار من ملفات فارغة. محرر الموقع للتعلّم والتجربة؛ تجربة واحدة في Eclipse ضرورية للتعوّد على بيئة التسليم.</p>"
      },
      {
        "title": "أنشئ المشروع والكلاسات",
        "html": "<ul><li>افتح Eclipse واختر مجلد workspace مناسبًا.</li><li>File ثم New ثم Project ثم Java Project، أو اختصار Java Project إن ظهر مباشرة. سمّه CS113Lab واستخدم Java runtime المرفقة المناسبة. <a href=\"https://help.eclipse.org/latest/topic/org.eclipse.jdt.doc.user/gettingStarted/qs-3.htm\" target=\"_blank\" rel=\"noopener\">دليل إنشاء المشروع الرسمي</a>.</li><li>داخل src أنشئ Class لكل كلاس مطلوب. اسم الملف يطابق public class: Device.java يحتوي public class Device.</li><li>أنشئ Interface من خيار Interface أو اكتب تعريفها في ملفها.</li><li>ضع كل الملفات في الحزمة نفسها. إذا استخدمت package، اكتب نفس التصريح الصحيح في جميع الملفات المعنية. لا توزعها عشوائيًا بين default package وحزم أخرى.</li></ul><p>إن ظهر خيار إنشاء module-info.java لمشروع التدريب البسيط يمكنك اختيار عدم إنشائه. إذا كانت الجامعة توفر قالبًا أو تعليمات module/package فاتبعها.</p>"
      },
      {
        "title": "تشغيل وتجميع وتجربة",
        "html": "<p>افتح الكلاس الذي يحتوي public static void main(String[] args). شغّله عبر Run As ثم Java Application. تظهر المخرجات في Console. احفظ الملفات قبل الاختبار، واقرأ Problems للأخطاء. إذا المشروع لا يعرف Java فراجع JRE System Library أو إعداد Installed JREs.</p><p>كود الموقع يجمع عدة كلاسات في ملف Main.java؛ لنقلها لملفات منفصلة ضع public على كل top-level class في ملفه فقط، واترك اسم الملف مطابقًا. imports توضع في كل ملف يحتاجها؛ لا تنتقل من ملف إلى آخر تلقائيًا.</p>"
      },
      {
        "title": "محاولة تقيس جاهزيتك",
        "html": "<p>اختر اختبارًا من نماذج الموقع، أغلق الشرح والحلول، واضبط وقتًا يناسب زمن ورقة الاختبار. ابنِ الملفات بنفسك. بعد التنفيذ اختبر الطبيعي والحدودي وغير الصحيح. إن احتجت تلميحًا سجّل الموضوع، ثم أعد ذلك الجزء بلا تلميح. لا يوجد زر يضمن الجاهزية؛ الدليل هو نجاح محاولتك المستقلة.</p><p>بعد النموذج الأول صحّح أخطاءك وجرّب نموذجًا مختلفًا. إذا ضاق وقت المذاكرة قدّم النمط المتكرر في الأربعة: interface، abstract، inheritance، array manager، exceptions، recursion. موضوعات GUI/files/DS موجودة لاستكمال المقرر، لكنها ليست ظاهرة في النماذج الأربعة المتاحة في الموقع؛ هذا لا يستبعد ورودها في اختبار جديد.</p>"
      },
      {
        "title": "حفظ المشروع وتقييم المحاولة",
        "html": "<p>احتفظ بملفات .java الأصلية، والسؤال الذي حليته، والمخرجات أو المدخلات التي اختبرتها. راجع الترجمة والمتطلبات والحالات الحدودية باستخدام قائمة التقييم الذاتي في الموقع. إذا طُلب تسليم المشروع، اتبع تعليمات المقرر لصيغة الملفات وطريقة التسليم؛ يمكن جمع مجلد src في ملف zip عندما تكون هذه الصيغة مطلوبة. لا تعتمد على .class وحدها؛ هي ناتج الترجمة وليست ملفات المصدر التي تراجعها.</p><p>قبل اعتماد المحاولة أو تسليمها: أسماء الملفات صحيحة، لا توجد أجزاء TODO، لا توجد package خاطئة، طريقة الحذف تطابق المطلوب، recursive method فعلًا تستدعي نفسها وتنتهي، وmain تتعامل مع الاستثناء المحدد.</p>"
      }
    ],
    "starter": "class Student {\n    private String name;\n    public Student(String name) { this.name = name; }\n    public String toString() { return name; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student(\"Ready for Eclipse\");\n        System.out.println(s);\n    }\n}\n",
    "expectedOutput": "Ready for Eclipse",
    "challenge": "<p>انقل المثال إلى مشروع Eclipse من ملفين: Student.java وMain.java. اجعل Student public في ملفه، وشغّل Main. بعدها افتح نموذج الاختبار الأول وابدأه من ملفات جديدة دون نسخ الحل.</p>",
    "hints": [
      "Student.java يحتوي كلاس Student فقط، وMain.java يحتوي Main فقط.",
      "أضف public قبل class Student عندما يكون في ملف مستقل.",
      "إذا استخدمت package، اجعله مطابقًا في الملفين."
    ],
    "solution": "// In Eclipse: move Student into Student.java and make it public.\nclass Student {\n    private String name;\n    public Student(String name) { this.name = name; }\n    public String toString() { return name; }\n}\n// Main.java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Student(\"Ready for Eclipse\"));\n    }\n}\n",
    "quiz": [
      {
        "question": "public class Device يجب أن يكون في…",
        "choices": [
          "Device.java",
          "device.txt",
          "Main.class"
        ],
        "answer": 0,
        "explanation": "اسم ملف المصدر يطابق اسم public class وحالة الحروف."
      },
      {
        "question": "أقوى دليل على الاستعداد؟",
        "choices": [
          "قراءة كل الحلول",
          "حل نموذج مستقل وتشغيله على حالات مختلفة",
          "حفظ شكل IDE"
        ],
        "answer": 1,
        "explanation": "الفهم يظهر في التنفيذ دون مساعدة والتحقق من الحدود."
      }
    ],
    "mode": "console",
    "stdin": "",
    "independentChecklist": [
      "أقدر أشرح الفكرة بجملة من عندي.",
      "توقعت الناتج قبل تشغيل المثال.",
      "عدّلت المثال وفهمت أثر التعديل.",
      "حاولت التحدي قبل فتح الحل."
    ]
  }
];
window.GLOSSARY = [
  {
    "term": "program",
    "meaning": "برنامج: تعليمات ينفذها الكمبيوتر بترتيب أو حسب أحداث.",
    "example": "Main يبدأ من main."
  },
  {
    "term": "compiler",
    "meaning": "مترجم يفحص Java ويحوّل المصدر إلى bytecode.",
    "example": "javac Main.java"
  },
  {
    "term": "runtime",
    "meaning": "بيئة تشغّل البرنامج بعد نجاح الترجمة.",
    "example": "Java Virtual Machine (JVM)"
  },
  {
    "term": "variable",
    "meaning": "اسم لقيمة مخزنة بنوع محدد.",
    "example": "int count = 0;"
  },
  {
    "term": "type",
    "meaning": "نوع القيمة التي يقبلها المتغير أو ترجعها الدالة.",
    "example": "int, double, String, Student"
  },
  {
    "term": "primitive",
    "meaning": "نوع بسيط يحمل القيمة مباشرة.",
    "example": "int age = 20;"
  },
  {
    "term": "String",
    "meaning": "نص ثابت المحتوى؛ قارن محتواه بـequals.",
    "example": "name.equals(\"Ali\")"
  },
  {
    "term": "boolean",
    "meaning": "قيمة منطقية إما true أو false.",
    "example": "boolean full = count == items.length;"
  },
  {
    "term": "array",
    "meaning": "خانات ذات نوع واحد وحجم ثابت بعد الإنشاء.",
    "example": "Student[] students = new Student[5];"
  },
  {
    "term": "index",
    "meaning": "رقم الخانة، يبدأ من صفر.",
    "example": "students[0]"
  },
  {
    "term": "length",
    "meaning": "سعة المصفوفة أو عدد حروف النص حسب الصياغة.",
    "example": "a.length و text.length()"
  },
  {
    "term": "count",
    "meaning": "عدد العناصر المستخدمة، وقد يكون أقل من السعة.",
    "example": "for(int i=0; i<count; i++)"
  },
  {
    "term": "loop",
    "meaning": "تكرار جسم كود ما دام شرط الاستمرار صحيحًا.",
    "example": "for / while / do while"
  },
  {
    "term": "method",
    "meaning": "دالة تؤدي مهمة داخل كلاس.",
    "example": "double cost()"
  },
  {
    "term": "parameter",
    "meaning": "متغير في رأس الدالة يستقبل مدخلًا.",
    "example": "int n في square(int n)"
  },
  {
    "term": "argument",
    "meaning": "القيمة التي ترسلها عند الاستدعاء.",
    "example": "4 في square(4)"
  },
  {
    "term": "return",
    "meaning": "إرجاع نتيجة والخروج من الدالة.",
    "example": "return price * 2;"
  },
  {
    "term": "void",
    "meaning": "الدالة لا تعيد قيمة.",
    "example": "public void display()"
  },
  {
    "term": "class",
    "meaning": "قالب يصف بيانات الكائن ودواله.",
    "example": "class Student { ... }"
  },
  {
    "term": "object",
    "meaning": "نسخة فعلية من كلاس لها حالة محددة.",
    "example": "new Student(\"Ali\",20)"
  },
  {
    "term": "field / attribute",
    "meaning": "متغير ضمن حالة الكلاس أو الكائن.",
    "example": "private int age;"
  },
  {
    "term": "constructor",
    "meaning": "منشئ يجهز حالة الكائن، اسمه نفس الكلاس وبلا return type.",
    "example": "public Student(String name)"
  },
  {
    "term": "this",
    "meaning": "مرجع للكائن الحالي؛ this(...) يستدعي منشئًا آخر من نفس الكلاس.",
    "example": "this.name = name;"
  },
  {
    "term": "private",
    "meaning": "الوصول المباشر محصور بالكلاس المعلن.",
    "example": "private double price;"
  },
  {
    "term": "public",
    "meaning": "عضو متاح لمن يستطيع الوصول للكلاس.",
    "example": "public double getPrice()"
  },
  {
    "term": "protected",
    "meaning": "صلاحية للأعضاء داخل الحزمة وللأبناء وفق قواعد الوصول.",
    "example": "protected String id;"
  },
  {
    "term": "encapsulation",
    "meaning": "حفظ الحالة داخل الكلاس والتحكم في تعديلها بدوال.",
    "example": "private price مع setPrice يتحقق من القيمة"
  },
  {
    "term": "getter / setter",
    "meaning": "دالة قراءة أو دالة تعديل للحقل.",
    "example": "getAge() / setAge(20)"
  },
  {
    "term": "static",
    "meaning": "عضو يتبع الكلاس ويشترك بين الكائنات.",
    "example": "Student.getCreated()"
  },
  {
    "term": "final",
    "meaning": "يمنع إعادة إسناد متغير، أو override لدالة، أو توريث كلاس حسب مكانه.",
    "example": "static final int SIZE = 10;"
  },
  {
    "term": "reference",
    "meaning": "قيمة تشير إلى كائن؛ نسخها لا ينسخ الكائن.",
    "example": "Student b = a;"
  },
  {
    "term": "null",
    "meaning": "مرجع لا يشير إلى كائن.",
    "example": "if (student == null)"
  },
  {
    "term": "alias",
    "meaning": "مرجعان أو أكثر يشيرون إلى الكائن نفسه.",
    "example": "a وb بعد b=a"
  },
  {
    "term": "copy constructor",
    "meaning": "منشئ يستقبل كائنًا ليصنع نسخة حسب سياسة النسخ المطلوبة.",
    "example": "new Student(other)"
  },
  {
    "term": "toString",
    "meaning": "دالة ترجع تمثيلًا نصيًا للكائن.",
    "example": "public String toString()"
  },
  {
    "term": "equals",
    "meaning": "دالة مقارنة لها معنى يحدده الكلاس؛ التوقيع مهم.",
    "example": "equals(Object) غير equals(Device)"
  },
  {
    "term": "overloading",
    "meaning": "نفس اسم الدالة مع قائمة مدخلات مختلفة؛ الاختيار وقت الترجمة.",
    "example": "add(int,int) و add(double,double)"
  },
  {
    "term": "overriding",
    "meaning": "ابن يعيد تعريف دالة موروثة بتوقيع متوافق.",
    "example": "@Override public double cost()"
  },
  {
    "term": "UML",
    "meaning": "رسم يختصر الكلاسات والحقول والتواقيع والعلاقات.",
    "example": "+getAge():int تعني public int getAge()"
  },
  {
    "term": "association",
    "meaning": "علاقة استخدام أو ارتباط عامة بين كائنات.",
    "example": "Teacher مرتبط بـStudent"
  },
  {
    "term": "aggregation",
    "meaning": "علاقة كل وجزء مستقل قابل للمشاركة.",
    "example": "معين فارغ عند الكل"
  },
  {
    "term": "composition",
    "meaning": "علاقة ملكية للجزء ضمن تصميم الكل ودورة حياته.",
    "example": "معين ممتلئ عند الكل"
  },
  {
    "term": "inheritance",
    "meaning": "توريث علاقة نوع خاص من نوع عام.",
    "example": "class Car extends Vehicle"
  },
  {
    "term": "superclass / subclass",
    "meaning": "الكلاس الأب والكلاس الابن.",
    "example": "Vehicle أب وCar ابن"
  },
  {
    "term": "super",
    "meaning": "يشير لسلوك الأب أو يستدعي منشئه عبر super(...).",
    "example": "super(name); / super.toString()"
  },
  {
    "term": "polymorphism",
    "meaning": "نفس استدعاء instance method يعمل بسلوك نوع الكائن الفعلي.",
    "example": "Animal a=new Cat(); a.speak();"
  },
  {
    "term": "abstract class",
    "meaning": "كلاس غير قابل للإنشاء مباشرة وقد يجمع تنفيذًا وحالة ودوال مجردة.",
    "example": "abstract class Device"
  },
  {
    "term": "abstract method",
    "meaning": "رأس دالة بلا جسم، تكمله الأصناف الملموسة.",
    "example": "public abstract double cost();"
  },
  {
    "term": "interface",
    "meaning": "عقد يحدد عمليات تدعمه الكلاسات.",
    "example": "interface Payable { double amount(); }"
  },
  {
    "term": "implements",
    "meaning": "إعلان أن كلاس يحقق واجهة.",
    "example": "class Invoice implements Payable"
  },
  {
    "term": "upcast / downcast",
    "meaning": "التعامل مع مرجع بنوع أعم أو أكثر تخصيصًا.",
    "example": "Animal a=new Cat(); Cat c=(Cat)a;"
  },
  {
    "term": "instanceof",
    "meaning": "اختبار توافق النوع الفعلي قبل التحويل.",
    "example": "if (a instanceof Cat)"
  },
  {
    "term": "exception",
    "meaning": "كائن يمثل حالة استثنائية تغير مسار التنفيذ.",
    "example": "NumberFormatException"
  },
  {
    "term": "try / catch",
    "meaning": "محاولة عمل قد يفشل ثم التعامل مع نوع الاستثناء المناسب.",
    "example": "catch (IOException e)"
  },
  {
    "term": "finally",
    "meaning": "كتلة تنظيف تعمل عادةً بعد try/catch سواء نجحت المحاولة أو فشلت.",
    "example": "finally { ... }"
  },
  {
    "term": "throw",
    "meaning": "تعليمة ترمي كائن الاستثناء فعليًا.",
    "example": "throw new IllegalArgumentException(\"Bad input\");"
  },
  {
    "term": "throws",
    "meaning": "إعلان في توقيع دالة بأن استثناء قد ينتقل إلى المستدعي.",
    "example": "public Item(...) throws MenuException"
  },
  {
    "term": "checked exception",
    "meaning": "استثناء يجبرك المترجم على catch أو throws له.",
    "example": "IOException أو استثناء extends Exception"
  },
  {
    "term": "unchecked exception",
    "meaning": "استثناء من RuntimeException أو Error وفروعهما لا يفرض catch/throws.",
    "example": "IllegalArgumentException"
  },
  {
    "term": "stream",
    "meaning": "اتصال تدفق بيانات من/إلى البرنامج.",
    "example": "FileInputStream / FileOutputStream"
  },
  {
    "term": "serialization",
    "meaning": "حفظ حالة كائنات في تدفق واسترجاعها.",
    "example": "writeObject / readObject"
  },
  {
    "term": "GUI",
    "meaning": "واجهة رسومية بعناصر وأحداث.",
    "example": "JFrame وJButton وJTextField"
  },
  {
    "term": "event / listener",
    "meaning": "حدث من المستخدم وكائن يستمع له.",
    "example": "addActionListener(this)"
  },
  {
    "term": "layout",
    "meaning": "قاعدة ترتيب العناصر داخل حاوية.",
    "example": "FlowLayout / GridLayout / BorderLayout"
  },
  {
    "term": "Node",
    "meaning": "عقدة تحتوي بيانات ورابطًا للعقدة التالية.",
    "example": "int data; Node next;"
  },
  {
    "term": "head / tail",
    "meaning": "مرجع أول وآخر عقدة في القائمة.",
    "example": "القائمة الفارغة head == null"
  },
  {
    "term": "Stack / LIFO",
    "meaning": "آخر عنصر دخل هو أول عنصر يخرج.",
    "example": "push ثم pop"
  },
  {
    "term": "Queue / FIFO",
    "meaning": "أول عنصر دخل هو أول عنصر يخرج.",
    "example": "enqueue ثم dequeue"
  },
  {
    "term": "generics",
    "meaning": "تحديد نوع عناصر قالب عام وقت الاستخدام.",
    "example": "Box<String>"
  },
  {
    "term": "recursion",
    "meaning": "دالة تستدعي نفسها على جزء أصغر.",
    "example": "max(values,n-1)"
  },
  {
    "term": "base case",
    "meaning": "الحالة البسيطة التي توقف الاستدعاء الذاتي.",
    "example": "if (n == 1) return values[0];"
  },
  {
    "term": "boundary case",
    "meaning": "قيمة عند حد المدخلات أو حالة فارغة/ممتلئة تستحق الاختبار.",
    "example": "count=0 أو count=capacity"
  },
  {
    "term": "IDE",
    "meaning": "بيئة تجمع تحرير الكود والتشغيل والتصحيح.",
    "example": "Eclipse"
  },
  {
    "term": "breakpoint",
    "meaning": "موضع يتوقف عنده debugger لتفحص القيم.",
    "example": "توقف قبل items[count++]=b;"
  }
];
window.SOURCES = {
  "foundation": "مراجعة تمهيدية لـ Java 1 (أُعدّت لهذا الموقع، وليست نقلاً من سلايدات CS113)",
  "objects": "1- Objects and methods/W1_Lec_3&W2_Lec_1-Ch1-1_Objects And Methods.pptx",
  "arrays": "1- Objects and methods/W2_Lec_2_3-Ch1-2_Arrays of Objects.pptx",
  "uml": "1- Objects and methods/W3_Lec_2_Lec_3-Ch 2_Relationship between classes using UML_UPDATED.pptx",
  "inheritance": "2- Inheritance/W4_Lec_2_3-chapter4_1-inheritance.pptx",
  "polymorphism": "3- Polymorhisim/W4_Lec_3&W5_Lec_1_2_3-W6-1chapter13-polymorphism-UPDATE.pptx",
  "interfaces": "4- Interface/W6_Lec_2_3-chapter5-interfaces_UPDATED.pptx",
  "exceptions": "5- Exception/W8_Lec_1_Lec_2-chapter6_1-exceptions_UPDATED_2.pptx",
  "exception2": "5- Exception/W8_Lec_2_Lec_3-chapter6-exceptions_2_UPDATED.pptx",
  "custom": "5- Exception/W9_Lec_1_2_3-chapter6-exceptions_3_UPDATED_22.pptx",
  "binary": "6- Files/W10_Lec1_2-chapter3_1files_1_UPDATED.pptx",
  "text": "6- Files/W10_Lec_3_W11_Lec_1_2_chapter3_2_files.pptx",
  "gui1": "7- GUI/W11_Lec_1_W14_Lec_2-chapter7_1-gui_new.pptx",
  "gui2": "7- GUI/W14_Lec_3-chapter7_2-gui.pptx",
  "gui3": "7- GUI/W15_Lec_1chapter7_3-gui.pptx",
  "ds1": "8- DS/W15_Lec_2_3_W16_Lec1_chapter8_1data-structures_UPDATED.pptx",
  "ds2": "8- DS/W16_lec_2_W17_Lec_1-chapter8_2data-structures_UPDATE.pptx",
  "recursion": "9- Recursion/W17_Lec_2_3_chapter9_UPDATE.pptx"
};
