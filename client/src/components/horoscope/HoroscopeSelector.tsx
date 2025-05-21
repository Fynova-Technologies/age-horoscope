import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodiacSigns } from '@/lib/zodiac-data';
import { useEffect, useState } from 'react';

const formSchema = z.object({
  sign: z.string().min(1, { message: "Please select your zodiac sign" }),
});

type HoroscopeSelectorData = z.infer<typeof formSchema>;

interface HoroscopeSelectorProps {
  onSelectSign: (sign: string) => void;
}

const HoroscopeSelector = ({ onSelectSign }: HoroscopeSelectorProps) => {
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(now.toLocaleDateString('en-US', options));
  }, []);

  const form = useForm<HoroscopeSelectorData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sign: "",
    },
  });

  const onChangeSign = (value: string) => {
    onSelectSign(value);
  };

  return (
    <div className="glass-card rounded-3xl p-6 shadow-md">
      <h3 className="font-heading text-xl text-gray-800 dark:text-white font-medium mb-4">
        Select Your Sign
      </h3>
      
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="sign"
            render={({ field }) => (
              <FormItem>
                <Select 
                  onValueChange={(value) => {
                    field.onChange(value);
                    onChangeSign(value);
                  }} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
                      <SelectValue placeholder="Select your zodiac sign" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {zodiacSigns.map((sign) => (
                      <SelectItem key={sign.id} value={sign.id}>
                        {sign.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </form>
      </Form>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <i className="fas fa-calendar-day mr-1"></i> 
          <span id="current-date">{currentDate}</span>
        </div>
        <button 
          className="text-primary hover:text-secondary transition"
          aria-label="Refresh horoscope"
          onClick={() => {
            const currentSign = form.getValues().sign;
            if (currentSign) {
              onSelectSign(currentSign);
            }
          }}
        >
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default HoroscopeSelector;
