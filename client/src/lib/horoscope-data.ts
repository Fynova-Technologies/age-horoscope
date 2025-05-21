// Sample horoscope data for each zodiac sign
const horoscopeData = {
  aries: {
    overview: "Today is filled with dynamic energy for you, Aries. Your natural leadership abilities shine, making this an excellent day for taking initiative on projects or inspiring others. Mars, your ruling planet, boosts your confidence and drive.",
    expanded: "You might find yourself drawn to physical activities that challenge you or allow you to release excess energy. Pay attention to spontaneous ideas – they could lead to exciting opportunities. However, be mindful of impulsive decisions, especially in financial matters.",
    categories: [
      {
        name: "Love",
        icon: "fa-heart",
        description: "A passionate day for connections. Single Aries might experience an instant attraction, while those in relationships can reignite the spark through shared adventures."
      },
      {
        name: "Career",
        icon: "fa-briefcase",
        description: "Your bold ideas will get noticed today. Don't hesitate to speak up in meetings or pitch new concepts to supervisors. Your enthusiasm is contagious."
      },
      {
        name: "Energy",
        icon: "fa-bolt",
        description: "High energy levels today. Channel this power constructively through exercise, competitive sports, or tackling challenging tasks that require stamina."
      }
    ],
    luckyElements: ["Color: Bright Red", "Number: 9", "Time: 2:30 PM"]
  },
  
  taurus: {
    overview: "Stability and comfort are highlighted for you today, Taurus. Venus brings harmony to your personal surroundings, making this a wonderful day to enhance your living space or enjoy life's sensual pleasures.",
    expanded: "Your practical nature helps you make sound decisions, especially regarding long-term investments or commitments. Take time to appreciate beauty around you – perhaps through nature, art, or music. Your patience serves you well in challenging situations.",
    categories: [
      {
        name: "Love",
        icon: "fa-heart",
        description: "A day for deepening emotional bonds through small but meaningful gestures. Consider cooking a special meal or creating a comfortable environment for quality time together."
      },
      {
        name: "Career",
        icon: "fa-briefcase",
        description: "Your reliability shines at work. Colleagues value your steady approach and practical solutions. A good day for financial planning or career development strategies."
      },
      {
        name: "Energy",
        icon: "fa-bolt",
        description: "Steady, grounded energy today. Activities that connect you to your senses – like gardening, cooking, or massage – will be especially rejuvenating."
      }
    ],
    luckyElements: ["Color: Forest Green", "Number: 6", "Time: 5:45 PM"]
  },
  
  gemini: {
    overview: "Your mind is particularly sharp today, Gemini. Mercury enhances your communication skills, making this an excellent day for writing, speaking, or any form of expression. Social connections bring valuable insights.",
    expanded: "You might find yourself juggling multiple interests or conversations, which plays to your natural strengths. However, try to focus enough to complete tasks rather than just starting them. Travel or short trips could bring unexpected pleasant experiences.",
    categories: [
      {
        name: "Love",
        icon: "fa-heart",
        description: "Intellectual connection matters most today. Engaging conversations and sharing ideas will strengthen bonds more than grand romantic gestures. Keep communication channels open."
      },
      {
        name: "Career",
        icon: "fa-briefcase",
        description: "Your versatility and quick thinking solve workplace challenges. A good day for brainstorming, networking, or learning new skills that expand your professional toolkit."
      },
      {
        name: "Energy",
        icon: "fa-bolt",
        description: "Mental energy is high but physical energy may fluctuate. Balance intellectual activities with movement – perhaps a walk while listening to a podcast or audiobook."
      }
    ],
    luckyElements: ["Color: Bright Yellow", "Number: 5", "Time: 11:00 AM"]
  },
  
  cancer: {
    overview: "Emotional insights flow naturally today, Cancer. The Moon enhances your intuitive abilities, helping you understand underlying currents in both personal and professional situations. Home and family matters take center stage.",
    expanded: "Your nurturing nature is appreciated by those around you. This is a good day to strengthen emotional bonds or create a more supportive environment. Your memory serves you well – past experiences provide valuable guidance for current situations.",
    categories: [
      {
        name: "Love",
        icon: "fa-heart",
        description: "Emotional intimacy deepens today. Creating a safe space for vulnerability leads to meaningful connection. Consider a quiet, cozy date night rather than something flashy."
      },
      {
        name: "Career",
        icon: "fa-briefcase",
        description: "Your emotional intelligence helps navigate workplace dynamics. Supporting colleagues builds goodwill. Projects involving history, care services, or food could be particularly successful."
      },
      {
        name: "Energy",
        icon: "fa-bolt",
        description: "Your energy is tied to emotional well-being today. Self-care activities, especially those involving water (bath, swimming, or simply proper hydration), will restore your vitality."
      }
    ],
    luckyElements: ["Color: Silver", "Number: 2", "Time: 9:15 PM"]
  },
  
  leo: {
    overview: "Your natural charisma shines brightly today, Leo. The Sun empowers your creative expression and leadership qualities. It's an excellent day for performance, presentation, or any situation where you can showcase your talents.",
    expanded: "Recognition for past efforts may come your way. Your generous spirit creates goodwill among friends and colleagues. While enjoying the spotlight, remember to acknowledge those who support you behind the scenes. A balanced approach enhances your magnetic appeal.",
    categories: [
      {
        name: "Love",
        icon: "fa-heart",
        description: "Romance flourishes with grand gestures and heartfelt expressions. Your warm nature attracts admirers, while existing relationships benefit from your passionate attention."
      },
      {
        name: "Career",
        icon: "fa-briefcase",
        description: "Leadership opportunities arise today. Your confidence inspires others, making this an excellent time for presentations, directing projects, or representing your team."
      },
      {
        name: "Energy",
        icon: "fa-bolt",
        description: "Vibrant energy flows today. Channel it into creative pursuits, physical activities that build strength, or social events where your presence elevates the atmosphere."
      }
    ],
    luckyElements: ["Color: Gold", "Number: 1", "Time: 12:30 PM"]
  },
  
  virgo: {
    overview: "Your analytical skills are heightened today, Virgo. Mercury helps you notice details others miss, making this an excellent day for problem-solving, organizing, or refining systems. Health and wellness matters benefit from your attention.",
    expanded: "Your helpful nature may draw requests for assistance. While supporting others is rewarding, maintain balance to avoid overwhelm. Small improvements lead to significant progress – celebrate these incremental steps rather than focusing only on the end goal.",
    categories: [
      {
        name: "Love",
        icon: "fa-heart",
        description: "Acts of service express your affection more eloquently than words today. Notice and appreciate the small ways your partner shows care, and be specific with compliments."
      },
      {
        name: "Career",
        icon: "fa-briefcase",
        description: "Your methodical approach solves complex problems. Technical details, research, or quality improvement projects flourish under your careful attention. Document your processes for future reference."
      },
      {
        name: "Energy",
        icon: "fa-bolt",
        description: "Mental energy exceeds physical energy today. Balance intellectual work with mindful movement – perhaps yoga, walking, or gentle stretching that connects mind and body."
      }
    ],
    luckyElements: ["Color: Navy Blue", "Number: 4", "Time: 4:15 PM"]
  },
  
  libra: {
    overview: "Harmony and balance are your focus today, Libra. Venus enhances your diplomatic abilities, making this an excellent day for resolving conflicts, negotiating agreements, or strengthening partnerships. Aesthetic experiences bring special joy.",
    expanded: "Your fair-minded approach helps mediate tensions between others. Beauty and culture call to you – perhaps visit an art gallery, attend a concert, or simply rearrange your space for better flow and visual appeal. Social connections offer both pleasure and opportunity.",
    categories: [
      {
        name: "Love",
        icon: "fa-heart",
        description: "Partnerships flourish with mutual respect and consideration. Creating beautiful experiences together strengthens bonds. Single Libras might meet someone through artistic or cultural events."
      },
      {
        name: "Career",
        icon: "fa-briefcase",
        description: "Collaborative projects thrive under your guidance. Your ability to see multiple perspectives leads to balanced solutions. Design, negotiation, or client-facing roles showcase your natural talents."
      },
      {
        name: "Energy",
        icon: "fa-bolt",
        description: "Your energy flows best in pleasant, harmonious environments. Activities involving partnership, artistic expression, or creating beauty will feel energizing rather than depleting."
      }
    ],
    luckyElements: ["Color: Soft Pink", "Number: 6", "Time: 7:30 PM"]
  },
  
  scorpio: {
    overview: "Deep insights and transformation are highlighted today, Scorpio. Pluto intensifies your perceptions, allowing you to see beyond surface appearances in situations and relationships. Research, investigation, and strategic planning are favored.",
    expanded: "Your powerful intuition guides important decisions. This is an excellent time for eliminating what no longer serves you – whether physical clutter, outdated beliefs, or draining relationships. Financial matters, especially investments or shared resources, benefit from your focused attention.",
    categories: [
      {
        name: "Love",
        icon: "fa-heart",
        description: "Emotional depth creates powerful connections today. Being vulnerable about your true feelings, while challenging, leads to genuine intimacy. Trust your intuition about relationship dynamics."
      },
      {
        name: "Career",
        icon: "fa-briefcase",
        description: "Your investigative abilities uncover solutions to persistent problems. Research, analysis, or strategic planning showcase your strengths. Power dynamics require thoughtful navigation."
      },
      {
        name: "Energy",
        icon: "fa-bolt",
        description: "Intense but controlled energy today. Transformative practices like meditation, therapy, or focused physical training help channel your powerful life force constructively."
      }
    ],
    luckyElements: ["Color: Deep Red", "Number: 8", "Time: 10:00 PM"]
  },
  
  sagittarius: {
    overview: "Adventure and expansion call to you today, Sagittarius. Jupiter broadens your horizons, making this an excellent time for travel, education, or exploring new philosophical ideas. Your optimistic outlook inspires those around you.",
    expanded: "Opportunities for growth appear in unexpected places – stay alert to possibilities that align with your larger goals. Your honest, straightforward communication clears up misunderstandings. Physical activities, especially outdoors, bring both pleasure and insight.",
    categories: [
      {
        name: "Love",
        icon: "fa-heart",
        description: "Shared adventures strengthen romantic bonds. Exploring new places or ideas together creates lasting memories. Your authentic self-expression attracts those who appreciate your spirited nature."
      },
      {
        name: "Career",
        icon: "fa-briefcase",
        description: "Vision and big-picture thinking lead to breakthrough ideas. International connections or cross-cultural projects benefit from your open-minded approach. Teaching or publishing opportunities may arise."
      },
      {
        name: "Energy",
        icon: "fa-bolt",
        description: "Abundant energy seeks expression through movement and exploration. Outdoor activities, especially in natural settings, align perfectly with your fire element and expansive spirit."
      }
    ],
    luckyElements: ["Color: Indigo", "Number: 3", "Time: 3:00 PM"]
  },
  
  capricorn: {
    overview: "Discipline and achievement are highlighted today, Capricorn. Saturn supports your ambitious nature, making this an excellent time for setting long-term goals, working on career advancement, or building structures that will stand the test of time.",
    expanded: "Your practical approach to challenges earns respect from colleagues and superiors. Traditions and history hold valuable lessons – don't overlook wisdom from the past. Financial planning benefits from your natural caution and foresight. Small, consistent efforts build impressive results.",
    categories: [
      {
        name: "Love",
        icon: "fa-heart",
        description: "Commitment and reliability strengthen relationships. Demonstrating your dedication through consistent support means more than grand romantic gestures. Building traditions together creates lasting bonds."
      },
      {
        name: "Career",
        icon: "fa-briefcase",
        description: "Your leadership and organizational skills shine today. Long-term planning, administration, or restructuring efforts benefit from your pragmatic approach. Mentoring junior colleagues builds your professional legacy."
      },
      {
        name: "Energy",
        icon: "fa-bolt",
        description: "Steady, enduring energy serves you today. Activities that build strength and stamina, like hiking or weight training, align with your earth element and determined nature."
      }
    ],
    luckyElements: ["Color: Deep Brown", "Number: 8", "Time: 8:00 AM"]
  },
  
  aquarius: {
    overview: "Innovation and humanitarian concerns are highlighted today, Aquarius. Uranus stimulates your inventive thinking, making this an excellent time for technological projects, social reform initiatives, or connecting with like-minded groups.",
    expanded: "Your unique perspective offers solutions others haven't considered. Friendship and community involvement bring both satisfaction and opportunity. Don't hesitate to express your individuality – your authentic self-expression inspires others to embrace their own uniqueness.",
    categories: [
      {
        name: "Love",
        icon: "fa-heart",
        description: "Intellectual connection and shared ideals strengthen bonds. Giving each other freedom within the relationship creates a healthy dynamic. Unexpected encounters could lead to intriguing connections for single Aquarians."
      },
      {
        name: "Career",
        icon: "fa-briefcase",
        description: "Innovative thinking solves persistent problems. Technology, social media, humanitarian organizations, or group projects benefit from your forward-thinking approach. Networking expands your professional influence."
      },
      {
        name: "Energy",
        icon: "fa-bolt",
        description: "Electric, unpredictable energy flows today. Activities that combine mental stimulation with physical movement keep you engaged. Group exercises or team sports align with your community-oriented nature."
      }
    ],
    luckyElements: ["Color: Electric Blue", "Number: 7", "Time: 2:00 PM"]
  },
  
  pisces: {
    overview: "Imagination and spiritual insights flow freely today, Pisces. Neptune enhances your intuitive and creative abilities, making this an excellent time for artistic pursuits, meditation, or compassionate service to others.",
    expanded: "Your empathetic nature helps you understand others on a deep level. Music, art, or nature experiences resonate particularly strongly. Dreams and subtle impressions contain valuable guidance – keep a journal nearby to capture these fleeting insights. Boundaries remain important despite your desire to help everyone.",
    categories: [
      {
        name: "Love",
        icon: "fa-heart",
        description: "Emotional and spiritual connection deepens relationships. Creating magical moments together through music, art, or natural beauty strengthens your bond. Your compassionate nature draws admirers seeking genuine connection."
      },
      {
        name: "Career",
        icon: "fa-briefcase",
        description: "Creative inspiration leads to unique contributions. Artistic fields, healthcare, counseling, or spiritual work align with your natural gifts. Trust your intuition about workplace dynamics and timing."
      },
      {
        name: "Energy",
        icon: "fa-bolt",
        description: "Flowing, fluid energy responds to your environment today. Water-related activities (swimming, bath rituals), dance, or gentle yoga align with your water element and adaptable nature."
      }
    ],
    luckyElements: ["Color: Sea Green", "Number: 7", "Time: 6:45 PM"]
  }
};

// Function to get horoscope data for a specific sign
export function getHoroscope(sign: string) {
  return horoscopeData[sign as keyof typeof horoscopeData];
}
