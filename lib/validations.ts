import { z } from 'zod'

export const leadFormSchema = z.object({
  name: z.string().min(2, 'El nombre es muy corto'),
  email: z.string().email('Ingresa un email válido'),
  phone: z
    .string()
    .min(10, 'Número inválido')
    .regex(/^\+?[0-9]{10,15}$/, 'Ingresa un número válido con código de país'),
  company: z.string().min(2, 'El nombre de empresa es muy corto'),
  volume: z.enum(['50-100', '100-200', '200-500', '500+'], {
    required_error: 'Selecciona una opción',
  }),
})

export type LeadFormData = z.infer<typeof leadFormSchema>
