const getPasswordStrength = (password) => {
  let score = 0;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[@$!%*?&]/.test(password)) score++;
  return score;
};

const PasswordStrengthMeter = ({ password }) => {
  const strength = getPasswordStrength(password);
  const strengthClasses = ["bg-gray-400", "bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-green-700"];

  return (
    <div className="flex space-x-1 pt-0.5">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-1/5 h-2 rounded ${i < strength ? strengthClasses[strength] : strengthClasses[0]}`}
        />
      ))}
    </div>
  );
};

export { PasswordStrengthMeter };