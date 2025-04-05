
import { Card, CardContent } from "@/components/ui/card";

export function AboutMe() {
  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-8 font-semibold">About The Artist</h2>
          <Card>
            <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg"
                  alt="Artist portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-medium mb-2">Aniket Kundu</h3>
                <p className="text-muted-foreground mb-4">
                  I'm a passionate artist specializing in custom phone covers and handcrafted items. With over 5 years of experience, I blend traditional techniques with modern designs to create unique pieces that bring joy to everyday items.
                </p>
                <p className="text-muted-foreground">
                  Each piece is carefully created in my home studio, ensuring attention to detail and quality. I love working with customers to bring their ideas to life and create something truly personal.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
