import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ContactFormData } from '../../types/contact';

interface FormFieldProps {
  label: string;
  name: keyof ContactFormData;
  register: UseFormRegister<ContactFormData>;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  rows?: number;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  register,
  error,
  type = 'text',
  placeholder,
  required,
  options,
  rows
}) => {
  const inputClasses = "w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition-colors";

  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === 'select' && options ? (
        <select {...register(name)} className={inputClasses}>
          <option value="">{placeholder}</option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          {...register(name)}
          rows={rows}
          className={inputClasses}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...register(name)}
          type={type}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};