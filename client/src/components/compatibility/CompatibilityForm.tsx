import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodiacSigns } from '@/lib/zodiac-data';
import { calculateCompatibility } from '@/lib/compatibility-data';

const formSchema = z.object({
  firstSign: z.string().min(1, { message: "Please select your zodiac sign" }),
  secondSign: z.string().min(1, { message: "Please select their zodiac sign" }),
});

type CompatibilityFormData = z.infer<typeof formSchema>;

interface CompatibilityFormProps {
  onCalculateCompatibility: (result: any) => void;
}

const CompatibilityForm = ({ onCalculateCompatibility }: CompatibilityFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CompatibilityFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstSign: "",
      secondSign: "",
    },
  });

  const onSubmit = (data: CompatibilityFormData) => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      const result = calculateCompatibility(data.firstSign, data.secondSign);
      onCalculateCompatibility(result);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="mb-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-4 mb-8">
            <div className="w-full md:w-2/5">
              <FormField
                control={form.control}
                name="firstSign"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 dark:text-gray-300">
                      Select Your Sign
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <i className="fas fa-heart text-primary"></i>
              </div>
            </div>

            <div className="w-full md:w-2/5">
              <FormField
                control={form.control}
                name="secondSign"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 dark:text-gray-300">
                      Select Their Sign
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
                          <SelectValue placeholder="Select their zodiac sign" />
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                type="submit"
                className="px-8 py-3 font-heading font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-md hover:shadow-lg transform transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i> Calculating...
                  </span>
                ) : (
                  "Calculate Compatibility"
                )}
              </Button>
            </motion.div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CompatibilityForm;
