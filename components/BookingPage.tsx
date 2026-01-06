import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Shield } from 'lucide-react';
import { BookingWidget } from './BookingWidget';

export const BookingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 font-body">
            {/* Decorative blobs */}
            <div className="blob w-96 h-96 bg-primary-200 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-30" />
            <div className="blob w-80 h-80 bg-secondary-200 rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-25" />

            {/* Header */}
            <header className="relative z-10 container mx-auto px-4 py-6">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 transition-colors font-medium group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Vissza a főoldalra
                </Link>
            </header>

            {/* Main Content */}
            <main className="relative z-10 container mx-auto px-4 pb-16">
                {/* Hero Section */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Calendar size={16} />
                        Online időpontfoglalás
                    </div>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Foglaljon konzultációt
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Dr. Kondorosi Ildikó bőrgyógyász szakorvos várja személyes konzultációra.
                        Válassza ki az Önnek megfelelő időpontot pár kattintással.
                    </p>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Clock size={16} className="text-green-600" />
                        </div>
                        <span>30 perces konzultáció</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Shield size={16} className="text-blue-600" />
                        </div>
                        <span>Kötelezettségmentes</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <Calendar size={16} className="text-purple-600" />
                        </div>
                        <span>Azonnali visszaigazolás</span>
                    </div>
                </div>

                {/* Booking Widget Container */}
                <div className="max-w-lg mx-auto">
                    <BookingWidget />
                </div>

                {/* Footer note */}
                <p className="text-center text-gray-500 text-sm mt-8 max-w-md mx-auto">
                    A foglalás után e-mailben megkapja a visszaigazolást és az előkészületi információkat.
                </p>
            </main>

            {/* Inline Booking Widget Styles */}
            <style>{`
        /* Booking Widget Styles - Premium Light Theme */
        .booking-widget {
          --bw-primary: #14b8a6;
          --bw-primary-hover: #0d9488;
          --bw-primary-light: #ccfbf1;
          --bw-success: #00C853;
          --bw-success-light: #E8F5E9;
          --bw-error: #FF3B30;
          --bw-error-light: #FFEBEE;
          --bw-gray-50: #FAFAFA;
          --bw-gray-100: #F5F5F5;
          --bw-gray-200: #EEEEEE;
          --bw-gray-300: #E0E0E0;
          --bw-gray-400: #BDBDBD;
          --bw-gray-500: #9E9E9E;
          --bw-gray-600: #757575;
          --bw-gray-700: #616161;
          --bw-gray-800: #424242;
          --bw-gray-900: #212121;
          --bw-white: #FFFFFF;
          --bw-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
          --bw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --bw-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --bw-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --bw-radius-sm: 8px;
          --bw-radius: 12px;
          --bw-radius-lg: 16px;
          --bw-radius-xl: 24px;
          --bw-transition: all 0.2s ease;
          font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: var(--bw-gray-900);
        }

        .booking-widget__card {
          background: var(--bw-white);
          border-radius: var(--bw-radius-lg);
          box-shadow: var(--bw-shadow-xl);
          overflow: hidden;
        }

        .booking-widget__header {
          padding: 24px 24px 20px;
          border-bottom: 1px solid var(--bw-gray-200);
          background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%);
        }

        .booking-widget__title {
          font-family: 'Manrope', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--bw-gray-900);
          margin: 0 0 4px;
        }

        .booking-widget__subtitle {
          font-size: 14px;
          color: var(--bw-gray-600);
          margin: 0;
        }

        .booking-widget__content {
          padding: 24px;
        }

        .booking-widget__steps {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
        }

        .booking-widget__step-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--bw-gray-300);
          transition: var(--bw-transition);
        }

        .booking-widget__step-dot--active {
          background: var(--bw-primary);
          width: 24px;
          border-radius: 4px;
        }

        .booking-widget__step-dot--completed {
          background: var(--bw-primary);
        }

        .booking-widget__calendar {
          margin-bottom: 16px;
        }

        .booking-widget__calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .booking-widget__calendar-title {
          font-family: 'Manrope', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: var(--bw-gray-800);
        }

        .booking-widget__calendar-nav {
          display: flex;
          gap: 8px;
        }

        .booking-widget__calendar-btn {
          width: 36px;
          height: 36px;
          border: 1px solid var(--bw-gray-200);
          background: var(--bw-white);
          border-radius: var(--bw-radius-sm);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--bw-transition);
          color: var(--bw-gray-600);
        }

        .booking-widget__calendar-btn:hover {
          background: var(--bw-gray-50);
          border-color: var(--bw-gray-300);
        }

        .booking-widget__weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          margin-bottom: 8px;
        }

        .booking-widget__weekday {
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          color: var(--bw-gray-500);
          padding: 8px 0;
        }

        .booking-widget__days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }

        .booking-widget__day {
          aspect-ratio: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 500;
          border: none;
          background: transparent;
          border-radius: var(--bw-radius-sm);
          cursor: pointer;
          transition: var(--bw-transition);
          color: var(--bw-gray-800);
          position: relative;
        }

        .booking-widget__day:hover:not(:disabled):not(.booking-widget__day--selected) {
          background: var(--bw-gray-100);
        }

        .booking-widget__day--today {
          background: var(--bw-primary-light);
          border: 2px solid var(--bw-primary);
          color: var(--bw-primary);
          font-weight: 700;
        }

        .booking-widget__day--selected {
          background: var(--bw-primary);
          color: var(--bw-white);
          border: 2px solid var(--bw-primary);
        }

        .booking-widget__day--disabled {
          color: var(--bw-gray-300);
          cursor: not-allowed;
          background: transparent;
        }

        .booking-widget__day--empty {
          visibility: hidden;
        }

        .booking-widget__day--has-slots {
          color: var(--bw-primary-hover);
          font-weight: 600;
        }

        .booking-widget__day--has-slots::after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          background: var(--bw-primary);
          border-radius: 50%;
        }

        .booking-widget__day--selected.booking-widget__day--has-slots::after {
          background: var(--bw-white);
        }

        .booking-widget__label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: var(--bw-gray-600);
          margin-bottom: 8px;
        }

        .booking-widget__select {
          width: 100%;
          padding: 12px 16px;
          font-size: 15px;
          border: 1px solid var(--bw-gray-300);
          border-radius: var(--bw-radius);
          background: var(--bw-white);
          color: var(--bw-gray-800);
          cursor: pointer;
          transition: var(--bw-transition);
        }

        .booking-widget__select:focus {
          outline: none;
          border-color: var(--bw-primary);
          box-shadow: 0 0 0 3px var(--bw-primary-light);
        }

        .booking-widget__service-selector {
          margin-bottom: 20px;
        }

        .booking-widget__slots {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 20px;
        }

        .booking-widget__slot {
          padding: 12px 8px;
          border: 1px solid var(--bw-gray-200);
          background: var(--bw-white);
          border-radius: var(--bw-radius);
          font-size: 14px;
          font-weight: 500;
          color: var(--bw-gray-700);
          cursor: pointer;
          transition: var(--bw-transition);
        }

        .booking-widget__slot:hover {
          border-color: var(--bw-primary);
          background: var(--bw-primary-light);
          color: var(--bw-primary);
        }

        .booking-widget__slot--selected {
          border-color: var(--bw-primary);
          background: var(--bw-primary);
          color: var(--bw-white);
        }

        .booking-widget__selected-summary {
          background: var(--bw-primary-light);
          border-radius: var(--bw-radius);
          padding: 12px 16px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .booking-widget__selected-info {
          font-size: 14px;
          color: var(--bw-primary-hover);
          font-weight: 500;
        }

        .booking-widget__selected-change {
          font-size: 13px;
          color: var(--bw-primary);
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: underline;
        }

        .booking-widget__empty {
          text-align: center;
          padding: 32px 16px;
          color: var(--bw-gray-500);
        }

        .booking-widget__form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .booking-widget__field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .booking-widget__input {
          width: 100%;
          padding: 12px 16px;
          font-size: 15px;
          border: 1px solid var(--bw-gray-300);
          border-radius: var(--bw-radius);
          background: var(--bw-white);
          color: var(--bw-gray-800);
          transition: var(--bw-transition);
          box-sizing: border-box;
        }

        .booking-widget__input::placeholder {
          color: var(--bw-gray-400);
        }

        .booking-widget__input:focus {
          outline: none;
          border-color: var(--bw-primary);
          box-shadow: 0 0 0 3px var(--bw-primary-light);
        }

        .booking-widget__textarea {
          min-height: 80px;
          resize: vertical;
        }

        .booking-widget__required {
          color: var(--bw-error);
        }

        .booking-widget__nav {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .booking-widget__button {
          flex: 1;
          padding: 14px 24px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          border-radius: var(--bw-radius);
          cursor: pointer;
          transition: var(--bw-transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .booking-widget__button--primary {
          background: var(--bw-primary);
          color: var(--bw-white);
        }

        .booking-widget__button--primary:hover:not(:disabled) {
          background: var(--bw-primary-hover);
          transform: translateY(-1px);
          box-shadow: var(--bw-shadow);
        }

        .booking-widget__button--primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .booking-widget__button--secondary {
          background: var(--bw-gray-100);
          color: var(--bw-gray-700);
        }

        .booking-widget__button--secondary:hover {
          background: var(--bw-gray-200);
        }

        .booking-widget__spinner {
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top-color: currentColor;
          border-radius: 50%;
          animation: bw-spin 0.8s linear infinite;
        }

        @keyframes bw-spin {
          to { transform: rotate(360deg); }
        }

        .booking-widget__error {
          padding: 12px 16px;
          background: var(--bw-error-light);
          border-radius: var(--bw-radius);
          color: var(--bw-error);
          font-size: 14px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .booking-widget__loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          gap: 16px;
        }

        .booking-widget__loading-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid var(--bw-gray-200);
          border-top-color: var(--bw-primary);
          border-radius: 50%;
          animation: bw-spin 0.8s linear infinite;
        }

        .booking-widget__loading-text {
          font-size: 14px;
          color: var(--bw-gray-500);
        }

        .booking-widget__success {
          text-align: center;
          padding: 16px 0;
        }

        .booking-widget__success-icon {
          width: 64px;
          height: 64px;
          background: var(--bw-success-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .booking-widget__success-icon svg {
          width: 32px;
          height: 32px;
          color: var(--bw-success);
        }

        .booking-widget__success-title {
          font-family: 'Manrope', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--bw-gray-900);
          margin: 0 0 8px;
        }

        .booking-widget__success-message {
          font-size: 14px;
          color: var(--bw-gray-500);
          margin: 0 0 24px;
        }

        .booking-widget__success-details {
          background: var(--bw-gray-50);
          border-radius: var(--bw-radius);
          padding: 20px;
          margin-bottom: 24px;
          text-align: left;
        }

        .booking-widget__success-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid var(--bw-gray-200);
        }

        .booking-widget__success-row:last-child {
          border-bottom: none;
        }

        .booking-widget__success-label {
          font-size: 13px;
          color: var(--bw-gray-500);
        }

        .booking-widget__success-value {
          font-size: 14px;
          font-weight: 500;
          color: var(--bw-gray-800);
        }

        .booking-widget__fade-in {
          animation: bw-fade-in 0.3s ease;
        }

        @keyframes bw-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
          .booking-widget__slots {
            grid-template-columns: repeat(2, 1fr);
          }
          .booking-widget__header {
            padding: 20px 20px 16px;
          }
          .booking-widget__content {
            padding: 20px;
          }
          .booking-widget__title {
            font-size: 18px;
          }
        }
      `}</style>
        </div>
    );
};

export default BookingPage;
