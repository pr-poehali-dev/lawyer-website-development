import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    icon: 'Building2',
    title: 'Корпоративное право',
    description: 'Юридическое сопровождение бизнеса, регистрация компаний, договорное право'
  },
  {
    icon: 'FileText',
    title: 'Гражданское право',
    description: 'Защита прав граждан, споры по договорам, наследственные дела'
  },
  {
    icon: 'Home',
    title: 'Недвижимость',
    description: 'Сделки с недвижимостью, оформление прав собственности'
  },
  {
    icon: 'Users',
    title: 'Семейное право',
    description: 'Разводы, раздел имущества, алименты, защита прав детей'
  },
  {
    icon: 'Briefcase',
    title: 'Трудовое право',
    description: 'Трудовые споры, восстановление на работе, защита прав работников'
  },
  {
    icon: 'Scale',
    title: 'Арбитражные споры',
    description: 'Представительство в арбитражных судах всех инстанций'
  }
];

const cases = [
  {
    title: 'Взыскание долга 15 млн руб.',
    category: 'Корпоративное право',
    result: 'Полное взыскание задолженности в пользу клиента',
    duration: '4 месяца'
  },
  {
    title: 'Раздел бизнеса',
    category: 'Семейное право',
    result: 'Справедливое разделение активов стоимостью 50 млн руб.',
    duration: '6 месяцев'
  },
  {
    title: 'Оспаривание сделки с недвижимостью',
    category: 'Недвижимость',
    result: 'Признание сделки недействительной, возврат объекта клиенту',
    duration: '8 месяцев'
  }
];

const faqs = [
  {
    question: 'Сколько стоит консультация?',
    answer: 'Первичная консультация — бесплатно (до 30 минут). Развернутая консультация — от 5 000 руб.'
  },
  {
    question: 'Как быстро можно получить консультацию?',
    answer: 'Мы работаем оперативно. Обычно консультация назначается в течение 1-2 рабочих дней.'
  },
  {
    question: 'Вы работаете в выходные?',
    answer: 'По предварительной записи возможны консультации в субботу. В срочных случаях — звоните.'
  },
  {
    question: 'Какие гарантии вы даете?',
    answer: 'Мы заключаем договор с четкими обязательствами. Гарантируем конфиденциальность и профессиональный подход.'
  },
  {
    question: 'Возможна ли рассрочка оплаты?',
    answer: 'Да, для постоянных клиентов и при долгосрочном сотрудничестве возможна поэтапная оплата.'
  }
];

const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

export default function Index() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
      date: selectedDate,
      time: selectedTime,
      message: formData.get('message')
    };

    console.log('Запись на консультацию:', data);
    
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения.',
    });
    
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Scale" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">ЛегалПро</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О нас</a>
              <a href="#cases" className="text-foreground/80 hover:text-primary transition-colors">Кейсы</a>
              <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Запись на консультацию</DialogTitle>
                  <DialogDescription>
                    Заполните форму, и мы свяжемся с вами для подтверждения
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input id="name" name="name" required placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="+7 (900) 000-00-00" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Услуга *</Label>
                    <Select name="service" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата *</Label>
                      <Input
                        id="date"
                        type="date"
                        required
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Время *</Label>
                      <Select required value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Опишите вашу ситуацию..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/4b2bb03a-5517-4b61-9509-99c90e9ea9a2/files/3fc5e752-2bb7-4502-bc61-72ebbb5af2fe.jpg"
            alt="Legal office"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Профессиональная<br />
              юридическая защита<br />
              <span className="text-primary">ваших интересов</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Опытные юристы с 15-летним стажем. Гарантируем результат и полное сопровождение на всех этапах.
            </p>
            <div className="flex flex-wrap gap-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                    Бесплатная консультация
                  </Button>
                </DialogTrigger>
              </Dialog>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Комплексное юридическое сопровождение для физических лиц и бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">О компании</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Юридическая компания «ЛегалПро» работает с 2009 года. За это время мы успешно разрешили более 2000 дел и помогли сотням клиентов защитить свои права.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">15+ лет опыта</h3>
                    <p className="text-foreground/70">Наша команда — это профессионалы высшей категории</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">98% выигранных дел</h3>
                    <p className="text-foreground/70">Высокий процент успешного разрешения споров</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">2000+ довольных клиентов</h3>
                    <p className="text-foreground/70">Доверие и рекомендации наших клиентов</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Наши преимущества</h3>
              <ul className="space-y-4">
                {[
                  'Индивидуальный подход к каждому клиенту',
                  'Прозрачная система оплаты — без скрытых платежей',
                  'Работаем по договору с четкими обязательствами',
                  'Полная конфиденциальность',
                  'Представительство во всех судебных инстанциях',
                  'Оперативное реагирование на обращения'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Успешные кейсы</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Примеры дел, которые мы выиграли для наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {caseItem.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-3">{caseItem.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{caseItem.result}</CardDescription>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Icon name="Clock" size={16} />
                    <span>Срок: {caseItem.duration}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Частые вопросы</h2>
              <p className="text-lg text-foreground/70">
                Ответы на популярные вопросы наших клиентов
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg px-6 border-2 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Контакты</h2>
              <p className="text-lg text-foreground/70">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Телефон</CardTitle>
                  <CardDescription className="text-base">
                    +7 (495) 123-45-67<br />
                    Пн-Пт: 9:00-19:00
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Email</CardTitle>
                  <CardDescription className="text-base">
                    info@legalpro.ru<br />
                    Ответим в течение часа
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Адрес</CardTitle>
                  <CardDescription className="text-base">
                    г. Москва, ул. Тверская, 1<br />
                    БЦ "Центральный", офис 501
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scale" size={28} className="text-primary" />
                <span className="text-2xl font-bold">ЛегалПро</span>
              </div>
              <p className="text-white/70">
                Профессиональная юридическая помощь с 2009 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/70">
                <li>Корпоративное право</li>
                <li>Гражданское право</li>
                <li>Недвижимость</li>
                <li>Семейное право</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@legalpro.ru</li>
                <li>г. Москва, ул. Тверская, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 ЛегалПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
