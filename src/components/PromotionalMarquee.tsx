
export function PromotionalMarquee() {
  const messages = [
    "🎨 Each item is handcrafted with love and care",
    "🎁 Perfect gift for your loved ones",
    "📱 Custom phone covers designed by you, for you",
    "📣 Free shipping on orders over ₹599",
    "🌍 All over India shipping available",
    "💌 Follow us on Instagram for new designs",
  ];

  return (
    <div className="bg-primary py-2 text-primary-foreground overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {messages.map((message, index) => (
          <span key={index} className="mx-6 text-sm font-medium">
            {message}
          </span>
        ))}
        {messages.map((message, index) => (
          <span key={`repeat-${index}`} className="mx-6 text-sm font-medium">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}
