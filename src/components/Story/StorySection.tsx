export default function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-[#e7ddcc] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #243247 25%, transparent 25%, transparent 75%, #243247 75%, #243247), linear-gradient(45deg, #243247 25%, transparent 25%, transparent 75%, #243247 75%, #243247)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#243247] mb-8 leading-tight">
          من عراقة الماضي<br/>
          لصياغة الحاضر<br/>
          لثقة تليق بك.
        </h2>

        <div className="space-y-6 text-lg text-gray-700 font-light max-w-2xl mx-auto">
          <p>
          في <bold>اورزي ١٩٩٨</bold>، نحن لا نصمم مجرد إكسسوارات أو أساور، بل نبتكر قطعاً فنية مُستلهمة من أصالة "الزمن الجميل". نحن نؤمن بأن القطعة التي تختارها هي امتدادٌ لروحك؛ لذا نصيغ إبداعاتنا لتمنح الرجل هيبةً طاغية ورونقاً استثنائياً، وتُبرز للمرأة رقتها الأخاذة وجمالها الحقيقي الذي ينبع من الداخل.
          </p>
          <p>
          تمتد جذورنا عبر عقود من الزمن، متأصلة في فن الحرفية الرفيعة. نحن نؤمن بابتكار قطعٍ تزداد عراقةً كلما مرت عليها السنين، لتصبح جزءاً لا يتجزأ من حكايتك الشخصية وبصمةً تعكس جوهرك الخاص.
          </p>
          <p>
          وفي عالمٍ تكتسحه الصيحات العابرة، نحن نختار الخلود. فما نقدمه ليس مجرد زينة، بل هي مقتنيات ثمينة تهمس بقصص الرقيّ، وتجسد الذوق الرفيع الذي لا يشيخ.
          </p>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-300">
          <p className="text-sm text-gray-600 font-semibold">
            "Timeless. Refined. Heritage."
          </p>
          <p className="text-gray-500 mt-2">— Orzi 1998</p>
        </div>
      </div>
    </section>
  );
}
