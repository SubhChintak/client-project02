
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Phone, MessageCircle } from "lucide-react";

export function ContactSection() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/7005523752?text=Hi, I have a question about your products.", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+91 7005523752");
  };

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-center mb-8 font-semibold">Get In Touch</h2>
        <Card className="max-w-xl mx-auto">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button onClick={handleCall} className="flex-1">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
              <Button onClick={handleWhatsApp} className="flex-1">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
            
            <div className="mt-6">
              <h3 className="text-center text-lg mb-4">Follow Us</h3>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open("https://facebook.com", "_blank")}>
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open("https://www.instagram.com/the_artistic_affinity/", "_blank")}>
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
