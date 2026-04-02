import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const LeadContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e email.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.from("contact_submissions").insert({
        id,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        company: formData.company.trim() || null,
      });

      if (error) throw error;

      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "lead-contact-notification",
          recipientEmail: "vilson@cfvalorum.com.br",
          idempotencyKey: `lead-contact-${id}`,
          templateData: {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim() || undefined,
            company: formData.company.trim() || undefined,
          },
        },
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", company: "" });
      }, 8000);
      toast({
        title: "Enviado com sucesso!",
        description: "Entraremos em contato em breve.",
      });
    } catch (err) {
      console.error("Form submission error:", err);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle className="w-16 h-16 text-[#c9a962] mx-auto mb-6" />
        <h3 className="text-2xl font-playfair font-bold text-white mb-3">
          Recebemos sua mensagem!
        </h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Nossa equipe entrará em contato em breve para agendar sua consultoria.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="lead-name" className="text-white text-sm font-semibold">
            Nome *
          </Label>
          <Input
            id="lead-name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a962] h-12"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-email" className="text-white text-sm font-semibold">
            Email *
          </Label>
          <Input
            id="lead-email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a962] h-12"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="lead-phone" className="text-white text-sm font-semibold">
            Telefone / WhatsApp
          </Label>
          <Input
            id="lead-phone"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a962] h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-company" className="text-white text-sm font-semibold">
            Empresa
          </Label>
          <Input
            id="lead-company"
            placeholder="Nome da empresa"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#c9a962] h-12"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-gradient-to-r from-[#c9a962] to-[#b8994f] hover:from-[#b8994f] hover:to-[#a8893f] text-[#0a1628] font-semibold py-6 text-lg uppercase tracking-wider"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Solicitar Consultoria Gratuita
          </>
        )}
      </Button>

      <p className="text-center text-sm text-gray-500">
        Sem compromisso · Seus dados estão seguros
      </p>
    </form>
  );
};

export default LeadContactForm;
