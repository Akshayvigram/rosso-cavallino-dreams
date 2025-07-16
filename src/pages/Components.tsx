
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/Switch';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Calendar,
  Car,
  Gauge,
  Heart,
  Settings,
  Star,
  Zap,
  Shield,
  Award,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

const Components = () => {
  const [sliderValue, setSliderValue] = React.useState([50]);
  const [progressValue, setProgressValue] = React.useState(75);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              UI <span className="text-gradient">Components</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the design system and components that power the Ferrari showroom experience
            </p>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Buttons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Primary Buttons</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Default Button</Button>
                  <Button size="lg" className="w-full">Large Button</Button>
                  <Button size="sm" className="w-full">Small Button</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Secondary Buttons</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="secondary" className="w-full">Secondary</Button>
                  <Button variant="outline" className="w-full">Outline</Button>
                  <Button variant="ghost" className="w-full">Ghost</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Special Buttons</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="destructive" className="w-full">Destructive</Button>
                  <Button className="w-full animate-glow">Animated Glow</Button>
                  <Button className="w-full" disabled>Disabled</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Form Elements</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Input Fields</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Enter your name" />
                  <Input type="email" placeholder="Enter your email" />
                  <Input type="password" placeholder="Enter password" />
                  <Textarea placeholder="Enter your message" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm">Accept terms and conditions</label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <label htmlFor="notifications" className="text-sm">Enable notifications</label>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm">Volume: {sliderValue[0]}%</label>
                    <Slider
                      value={sliderValue}
                      onValueChange={setSliderValue}
                      max={100}
                      step={1}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm">Progress: {progressValue}%</label>
                    <Progress value={progressValue} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Badges and Cards */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Badges & Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Ferrari F8 Tributo</CardTitle>
                    <Badge>New</Badge>
                  </div>
                  <CardDescription>Mid-rear-engine sports car</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2 mb-4">
                    <Badge variant="secondary">V8 Engine</Badge>
                    <Badge variant="outline">710 HP</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Experience the thrill of Ferrari's legendary performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    Performance Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Top Speed</span>
                      <Badge>340 km/h</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>0-100 km/h</span>
                      <Badge variant="secondary">2.9s</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Power</span>
                      <Badge variant="outline">710 HP</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Badge Variants</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Icons */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Icons</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {[
                { icon: Car, name: 'Car' },
                { icon: Gauge, name: 'Gauge' },
                { icon: Heart, name: 'Heart' },
                { icon: Settings, name: 'Settings' },
                { icon: Star, name: 'Star' },
                { icon: Zap, name: 'Zap' },
                { icon: Shield, name: 'Shield' },
                { icon: Award, name: 'Award' },
              ].map(({ icon: Icon, name }) => (
                <Card key={name} className="text-center p-4 hover:ferrari-glow transition-all">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-ferrari-red" />
                  <p className="text-sm text-muted-foreground">{name}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Alerts</h2>
            <div className="space-y-4 max-w-2xl">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational alert with useful details.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please try again.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Tabs</h2>
            <Tabs defaultValue="specs" className="max-w-2xl">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>
              <TabsContent value="specs" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Engine: V8 Twin-Turbo, 3.9L displacement, 710 HP</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Advanced aerodynamics, carbon fiber construction, racing heritage</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="gallery" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Photo Gallery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>High-resolution images showcasing every angle</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Accordion */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Accordion</h2>
            <Accordion type="single" collapsible className="max-w-2xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>What makes Ferrari special?</AccordionTrigger>
                <AccordionContent>
                  Ferrari combines Italian craftsmanship with cutting-edge technology and racing heritage to create the world's most desirable sports cars.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I book a test drive?</AccordionTrigger>
                <AccordionContent>
                  You can book a test drive through our website or by visiting any Ferrari showroom. Our team will arrange a personalized experience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What warranty options are available?</AccordionTrigger>
                <AccordionContent>
                  Ferrari offers comprehensive warranty packages including extended coverage options and maintenance programs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Components;
