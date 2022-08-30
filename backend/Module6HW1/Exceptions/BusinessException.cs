using System;

namespace Module6HW1.Exceptions
{
    public class BusinessException : Exception
    {
        public string ErrorMessage { get; set; }

        public BusinessException(string errorMessage) : base()
        {
            ErrorMessage = errorMessage;
        }
    }
}
