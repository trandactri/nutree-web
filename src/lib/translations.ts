export type Locale = 'en' | 'vi';

/** Map nav link href to translated label */
export function getNavLabel(href: string, nav: { howItWorks: string; features: string; download: string }): string {
  if (href === '#how-it-works') return nav.howItWorks;
  if (href === '#features') return nav.features;
  if (href === '#download') return nav.download;
  return '';
}

interface TranslationStrings {
  nav: { howItWorks: string; features: string; download: string };
  hero: {
    badge: string;
    headlines: string[];
    subheadline: string;
    downloadFree: string;
    tagline?: string;
    scroll: string;
    trustBadges: { rating: string; freeTrial: string; languages: string };
  };
  socialProof: {
    mealsTracked: string;
    rating: string;
    accuracy: string;
    languages: string;
  };
  howItWorks: {
    title: string;
    steps: Array<{ title: string; description: string }>;
  };
  features: {
    title: string;
    swipeHint: string;
    items: Array<{ id: string; title: string; description: string }>;
  };
  testimonials: {
    title: string;
    items: Array<{
      id: string;
      quote: string;
      author: string;
      role: string;
      achievement?: string;
    }>;
  };
  finalCta: {
    badge: string;
    headline: string;
    subtext: string;
    trustMessage: string;
    downloadOnThe: string;
    appStore: string;
    stats: { daysFree: string; languages: string; aiPowered: string; rating: string };
  };
  footer: {
    quickLinks: string;
    getInTouch: string;
    contactPrompt: string;
    contactSupport: string;
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
  };
}

export const translations: Record<Locale, TranslationStrings> = {
  en: {
    nav: {
      howItWorks: 'How it works',
      features: 'Features',
      download: 'Download',
    },
    hero: {
      badge: 'AI Nutrition Assistant',
      headlines: ['IDEAS.', 'TRACK.', 'THRIVE.'],
      subheadline:
        'Not another calorie counter. Nutree adapts your daily targets, plans your meals, and tracks every macro — automatically.',
      downloadFree: 'Download Free',
      scroll: 'Scroll',
      trustBadges: {
        rating: '4.9 Rating',
        freeTrial: '7-Day Free Trial',
        languages: '7 Languages',
      },
    },
    socialProof: {
      mealsTracked: 'Meals Tracked',
      rating: 'App Store Rating',
      accuracy: 'AI Accuracy',
      languages: 'Languages Supported',
    },
    howItWorks: {
      title: 'How {Nutree} works',
      steps: [
        {
          title: 'Log',
          description: 'Snap a photo, scan a barcode, or describe your meal in plain text',
        },
        {
          title: 'Adapt',
          description: 'AI breaks down macros and rebalances your weekly budget automatically',
        },
        {
          title: 'Achieve',
          description: 'Cut, bulk, or recomp — hit your goals without guilt',
        },
      ],
    },
    features: {
      title: 'What does {Nutree} include?',
      swipeHint: 'Swipe to browse features',
      items: [
        {
          id: 'ai-scanning',
          title: 'Effortless Food Logging',
          description:
            'Photo scan, barcode, or describe in plain text. AI decomposes every ingredient and derives fiber-aware calories from your macros.',
        },
        {
          id: 'meal-suggestions',
          title: 'Daily Meal Guidance',
          description:
            'Personalized meals with exact portions, a meal prep calendar for your week, and step-by-step recipe instructions.',
        },
        {
          id: 'dashboard',
          title: 'No Guilt. Ever.',
          description:
            "Cheat day? Nutree rebalances your weekly budget and adjusts tomorrow's target automatically. Life happens — Nutree adapts.",
        },
        {
          id: 'edit',
          title: 'Science-Based Goals',
          description:
            'Cut, bulk, or recomposition — weight-based macros (g/kg) grounded in evidence, with TDEE personalized to your body.',
        },
        {
          id: 'languages',
          title: '7 Languages',
          description:
            'Available in 7 languages with dark/light themes and redesigned onboarding. Your AI Nutrition Assistant, your way.',
        },
        {
          id: 'reports',
          title: 'Weekly Nutrition Budget',
          description:
            "Adaptive targets that update daily based on your real consumption. Next-day preview so you always know what's coming.",
        },
      ],
    },
    testimonials: {
      title: 'Why choose {Nutree}?',
      items: [
        {
          id: '1',
          quote:
            'Nutree completely changed how I track my food. The AI is incredibly accurate and saves me so much time every day. I finally hit my protein goals consistently!',
          author: 'Sarah M.',
          role: 'Fitness Enthusiast',
          achievement: 'Lost 15 lbs in 3 months',
        },
        {
          id: '2',
          quote:
            'As a busy professional, I never had time to manually log meals. Now I just snap a photo and I am done. The meal planning feature is a game changer for my weekly prep.',
          author: 'David K.',
          role: 'Software Engineer',
          achievement: 'Gained 10 lbs muscle',
        },
        {
          id: '3',
          quote:
            'I have tried every nutrition app out there. Nutree is by far the most accurate and easiest to use. The Vietnamese language support is perfect for my family.',
          author: 'Linh T.',
          role: 'Working Mom',
          achievement: 'Whole family tracking',
        },
        {
          id: '4',
          quote:
            'The AI meal suggestions are spot on. It learned my preferences quickly and now suggests meals I actually want to eat. Down 20 lbs and counting!',
          author: 'Marcus J.',
          role: 'Personal Trainer',
          achievement: 'Recommends to clients',
        },
      ],
    },
    finalCta: {
      badge: 'Start Your Transformation',
      headline: "Life happens. Cheat days happen. Nutree makes sure they don't matter.",
      downloadOnThe: 'Download on the',
      appStore: 'App Store',
      subtext:
        'Start your 7-day free trial. No credit card required. Your AI Nutrition Assistant adapts, so you never have to start over.',
      trustMessage: '7-Day Free Trial \u2022 No Credit Card Required',
      stats: {
        daysFree: 'Days Free',
        languages: 'Languages',
        aiPowered: 'Powered',
        rating: 'Rating',
      },
    },
    footer: {
      quickLinks: 'Quick Links',
      getInTouch: 'Get in Touch',
      contactPrompt:
        "Have questions or feedback? We'd love to hear from you.",
      contactSupport: 'Contact Support',
      copyright: 'Nutree. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
  },
  vi: {
    nav: {
      howItWorks: 'Cách hoạt động',
      features: 'Tính năng',
      download: 'Tải về',
    },
    hero: {
      badge: 'Trợ Lý Dinh Dưỡng AI',
      headlines: ['Ý TƯỞNG.', 'THEO DÕI.', 'PHÁT TRIỂN.'],
      subheadline:
        'Không chỉ là đếm calo. Nutree tự động điều chỉnh mục tiêu hàng ngày, lên kế hoạch bữa ăn và theo dõi từng chỉ số dinh dưỡng — hoàn toàn tự động.',
      downloadFree: 'Tải Miễn Phí',
      scroll: 'Cuộn',
      tagline: 'Tăng Cơ Giảm Mỡ',
      trustBadges: {
        rating: 'Đánh giá 4.9',
        freeTrial: 'Dùng thử 7 ngày',
        languages: '7 Ngôn ngữ',
      },
    },
    socialProof: {
      mealsTracked: 'Bữa ăn đã theo dõi',
      rating: 'Đánh giá App Store',
      accuracy: 'Độ chính xác AI',
      languages: 'Ngôn ngữ được hỗ trợ',
    },
    howItWorks: {
      title: '{Nutree} hoạt động như thế nào',
      steps: [
        {
          title: 'Ghi chép',
          description: 'Chụp ảnh, quét mã vạch hoặc mô tả bữa ăn bằng văn bản thông thường',
        },
        {
          title: 'Điều chỉnh',
          description: 'AI phân tích macro và tự động cân bằng lại ngân sách tuần của bạn',
        },
        {
          title: 'Đạt mục tiêu',
          description: 'Giảm mỡ, tăng cơ hoặc tái cân bằng — đạt mục tiêu mà không lo lắng',
        },
      ],
    },
    features: {
      title: '{Nutree} bao gồm những gì?',
      swipeHint: 'Vuốt để xem tính năng',
      items: [
        {
          id: 'ai-scanning',
          title: 'Ghi Chép Thực Phẩm Dễ Dàng',
          description:
            'Chụp ảnh, quét mã vạch hoặc mô tả bằng văn bản. AI phân tích từng nguyên liệu và tính calo từ macro có tính đến chất xơ.',
        },
        {
          id: 'meal-suggestions',
          title: 'Hướng Dẫn Bữa Ăn Hàng Ngày',
          description:
            'Bữa ăn cá nhân hóa với khẩu phần chính xác, lịch chuẩn bị bữa ăn cho cả tuần và hướng dẫn nấu ăn từng bước.',
        },
        {
          id: 'dashboard',
          title: 'Không Lo Lắng. Mãi Mãi.',
          description:
            'Ngày ăn kiêng thất bại? Nutree tự động cân bằng lại ngân sách tuần và điều chỉnh mục tiêu ngày mai. Cuộc sống xảy ra — Nutree thích nghi.',
        },
        {
          id: 'edit',
          title: 'Mục Tiêu Dựa Trên Khoa Học',
          description:
            'Giảm mỡ, tăng cơ hoặc tái cân bằng — macro dựa trên cân nặng (g/kg) có căn cứ khoa học, TDEE được cá nhân hóa theo cơ thể bạn.',
        },
        {
          id: 'languages',
          title: '7 Ngôn Ngữ',
          description:
            'Hỗ trợ 7 ngôn ngữ với giao diện tối/sáng và trải nghiệm khởi đầu được thiết kế lại. Trợ lý dinh dưỡng AI theo cách của bạn.',
        },
        {
          id: 'reports',
          title: 'Ngân Sách Dinh Dưỡng Tuần',
          description:
            'Mục tiêu thích ứng cập nhật hàng ngày dựa trên lượng tiêu thụ thực tế. Xem trước ngày hôm sau để luôn biết kế hoạch tiếp theo.',
        },
      ],
    },
    testimonials: {
      title: 'Tại sao chọn {Nutree}?',
      items: [
        {
          id: '1',
          quote:
            'Nutree hoàn toàn thay đổi cách tôi theo dõi thức ăn. AI cực kỳ chính xác và tiết kiệm rất nhiều thời gian mỗi ngày. Cuối cùng tôi cũng đạt được mục tiêu protein!',
          author: 'Sarah M.',
          role: 'Người đam mê thể hình',
          achievement: 'Giảm 7kg trong 3 tháng',
        },
        {
          id: '2',
          quote:
            'Là một người bận rộn, tôi không bao giờ có thời gian ghi chép bữa ăn. Giờ chỉ cần chụp ảnh là xong. Tính năng gợi ý bữa ăn thực sự tuyệt vời.',
          author: 'David K.',
          role: 'Kỹ sư phần mềm',
          achievement: 'Tăng 5kg cơ bắp',
        },
        {
          id: '3',
          quote:
            'Tôi đã thử mọi ứng dụng dinh dưỡng. Nutree chính xác nhất và dễ sử dụng nhất. Hỗ trợ tiếng Việt hoàn hảo cho gia đình tôi.',
          author: 'Linh T.',
          role: 'Mẹ bận rộn',
          achievement: 'Cả gia đình cùng theo dõi',
        },
        {
          id: '4',
          quote:
            'Gợi ý bữa ăn AI rất chuẩn. Nó nhanh chóng học được sở thích của tôi và gợi ý những bữa ăn tôi thực sự muốn ăn. Đã giảm 9kg!',
          author: 'Marcus J.',
          role: 'Huấn luyện viên cá nhân',
          achievement: 'Giới thiệu cho học viên',
        },
      ],
    },
    finalCta: {
      badge: 'Bắt đầu thay đổi',
      headline: 'Cuộc sống xảy ra. Ngày ăn kiêng thất bại xảy ra. Nutree đảm bảo chúng không quan trọng.',
      downloadOnThe: 'Tải về trên',
      appStore: 'App Store',
      subtext:
        'Bắt đầu dùng thử 7 ngày miễn phí. Không cần thẻ tín dụng. Trợ lý dinh dưỡng AI của bạn tự thích nghi, để bạn không bao giờ phải bắt đầu lại.',
      trustMessage: 'Dùng thử 7 ngày \u2022 Không cần thẻ tín dụng',
      stats: {
        daysFree: 'Ngày miễn phí',
        languages: 'Ngôn ngữ',
        aiPowered: 'AI',
        rating: 'Đánh giá',
      },
    },
    footer: {
      quickLinks: 'Liên kết nhanh',
      getInTouch: 'Liên hệ',
      contactPrompt:
        'Bạn có câu hỏi hoặc góp ý? Chúng tôi rất muốn nghe từ bạn.',
      contactSupport: 'Liên hệ hỗ trợ',
      copyright: 'Nutree. Mọi quyền được bảo lưu.',
      privacyPolicy: 'Chính sách bảo mật',
      termsOfService: 'Điều khoản sử dụng',
    },
  },
};
