import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { calculateAge } from '@/lib/age-calculator';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Schema for the birth date form
const formSchema = z.object({
  birthDate: z.string().refine(val => {
    const date = new Date(val);
    return !isNaN(date.getTime());
  }, { message: "Please enter a valid date" }),
  birthTime: z.string().optional(),
});

type AgeFormData = z.infer<typeof formSchema>;

interface AgeInputFormProps {
  onAgeCalculated: (ageResult: any) => void;
}

const AgeInputForm = ({ onAgeCalculated }: AgeInputFormProps) => {
  const form = useForm<AgeFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birthDate: '',
      birthTime: '',
    },
  });

  const onSubmit = (data: AgeFormData) => {
    const result = calculateAge(data.birthDate, data.birthTime);
    onAgeCalculated(result);
  };

  return (
    <div className="w-full lg:w-2/5 glass-card rounded-3xl p-6 md:p-8 shadow-md">
      <h3 className="font-heading text-xl text-gray-800 dark:text-white font-medium mb-6">
        Enter Your Birth Details
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600 dark:text-gray-300">
                  Date of Birth
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600 dark:text-gray-300">
                  Time of Birth (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    type="time"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs text-gray-600 dark:text-gray-400">
                  Adding birth time provides more accurate zodiac information
                </FormDescription>
              </FormItem>
            )}
          />

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-medium py-6 rounded-xl shadow-md hover:shadow-lg transform transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Calculate My Age
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AgeInputForm;
