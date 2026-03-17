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
        'Your AI Nutrition Assistant. Snap a photo, get instant insights, and crush your health goals.',
      downloadFree: 'Download Free',
      scroll: 'Scroll',
      trustBadges: {
        rating: '4.9 Rating',
        freeTrial: '7-Day Free Trial',
        languages: 'EN & VI',
      },
    },
    socialProof: {
      mealsTracked: 'Meals Tracked',
      rating: 'App Store Rating',
      accuracy: 'AI Accuracy',
      languages: 'Languages (EN & VI)',
    },
    howItWorks: {
      title: 'How {Nutree} works',
      steps: [
        { title: 'Snap', description: 'Point camera at any meal' },
        { title: 'Analyze', description: 'AI breaks down nutrition instantly' },
        { title: 'Achieve', description: 'Track progress & hit your goals' },
      ],
    },
    features: {
      title: 'What does {Nutree} include?',
      swipeHint: 'Swipe to browse features',
      items: [
        {
          id: 'ai-scanning',
          title: 'AI Food Scanner',
          description:
            'Point your camera at any meal and get instant nutrition data with 95% accuracy.',
        },
        {
          id: 'meal-suggestions',
          title: 'Meal Ideas Suggestion',
          description:
            'Get personalized meal ideas based on your nutrition goals and preferences.',
        },
        {
          id: 'weekly-budget',
          title: 'Smart Weekly Budget',
          description:
            'AI-powered weekly calorie budget that adapts to your eating patterns.',
        },
        {
          id: 'dashboard',
          title: 'Calories Tracking System',
          description:
            'Track macros with beautiful visualizations and progress insights.',
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
      headline: 'Ready to transform your health?',
      downloadOnThe: 'Download on the',
      appStore: 'App Store',
      subtext:
        'Download Nutree and get 7 days free access to all standard features. No credit card required.',
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
        'Trợ lý dinh dưỡng AI của bạn. Chụp ảnh, nhận phân tích dinh dưỡng tức thì và chinh phục mục tiêu sức khỏe.',
      downloadFree: 'Tải Miễn Phí',
      scroll: 'Cuộn',
      tagline: 'Tăng Cơ Giảm Mỡ',
      trustBadges: {
        rating: 'Đánh giá 4.9',
        freeTrial: 'Dùng thử 7 ngày',
        languages: 'EN & VI',
      },
    },
    socialProof: {
      mealsTracked: 'Bữa ăn đã theo dõi',
      rating: 'Đánh giá App Store',
      accuracy: 'Độ chính xác AI',
      languages: 'Ngôn ngữ (EN & VI)',
    },
    howItWorks: {
      title: '{Nutree} hoạt động như thế nào',
      steps: [
        { title: 'Chụp', description: 'Hướng camera vào bất kỳ bữa ăn nào' },
        {
          title: 'Phân tích',
          description: 'AI phân tích dinh dưỡng ngay lập tức',
        },
        {
          title: 'Đạt mục tiêu',
          description: 'Theo dõi tiến trình & đạt mục tiêu',
        },
      ],
    },
    features: {
      title: '{Nutree} bao gồm những gì?',
      swipeHint: 'Vuốt để xem tính năng',
      items: [
        {
          id: 'ai-scanning',
          title: 'Máy quét thực phẩm AI',
          description:
            'Hướng camera vào bất kỳ bữa ăn nào và nhận dữ liệu dinh dưỡng tức thì với độ chính xác 95%.',
        },
        {
          id: 'meal-suggestions',
          title: 'Gợi ý bữa ăn',
          description:
            'Nhận gợi ý bữa ăn cá nhân hóa dựa trên mục tiêu dinh dưỡng của bạn.',
        },
        {
          id: 'weekly-budget',
          title: 'Ngân sách tuần thông minh',
          description:
            'Ngân sách calo hàng tuần do AI hỗ trợ, tự động điều chỉnh theo thói quen ăn uống của bạn.',
        },
        {
          id: 'dashboard',
          title: 'Hệ thống theo dõi calo',
          description:
            'Theo dõi macro với biểu đồ trực quan và thông tin chi tiết về tiến trình.',
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
      headline: 'Sẵn sàng thay đổi sức khỏe của bạn?',
      downloadOnThe: 'Tải về trên',
      appStore: 'App Store',
      subtext:
        'Tải Nutree và nhận 7 ngày sử dụng miễn phí tất cả tính năng. Không cần thẻ tín dụng.',
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
