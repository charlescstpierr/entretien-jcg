interface FormSuccessProps {
  message: string;
  onReset?: () => void;
}

export const FormSuccess = ({ message, onReset }: FormSuccessProps) => {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-emerald-primary"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        Message envoyé!
      </h3>
      <p className="text-slate-600 mb-6">{message}</p>
      {onReset && (
        <button
          onClick={onReset}
          className="text-emerald-primary hover:text-emerald-700 font-medium transition-colors"
        >
          Envoyer un autre message
        </button>
      )}
    </div>
  );
};
