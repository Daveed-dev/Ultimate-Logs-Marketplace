import React from 'react';

const NotificationSidebar = ({
  ActivePanel,
  SetActivePanel,
  setSelectedNotification,
}) => {
  const notificationLists = [
    {
      id: 1,
      title: 'New Virtual Payment Payment',
      content: `Another virtual Paga payment method just dropped 🔥✅
Fast • Reliable • Secure

Fund your account easily with the new Paga payment option. 💜`,
      time: '2 Months ago',
    },
    {
      id: 2,
      title: 'How Referrals Works',
      preview:
        'Our Referral Program is now Active ✅.. Refer and Earn &nbsp; Referral Rules1. Minimum Deposit RequirementYour referrals m..',
      content: `Our Referral Program is now Active ✅.. Refer and Earn

Referral Rules

1. Minimum Deposit Requirement
Your referrals must deposit at least ₦5,000 for you to earn commission.

2. Earnings Rate
Earn 3% on all subsequent deposits made by your referred users till they reach Level 1 (i.e you stop earning from each referred users once the accumulated deposit is ₦500,000).

3. Referral Balance
Earnings are credited to your separate referral balance, not your main account balance.

4. Transfer Requirements
Minimum transfer amount is ₦3,000 to move funds to your main balance.

5. Usage Restriction
Referral earnings can only be used for website purchases and services.

To see your referral code, go to homepage and scroll down a bit. ( Click on Start referring to see your referral dashboard)
`,
      time: '6 Months ago',
    },
  ];

  return (
    <>
      <section
        className={`fixed right-0 bottom-0 md:w-100 w-80 bg-[var(--cl-white)] h-full p-6  z-50 overflow-y-auto scrollbar-hidden transition-all duration-300 ${ActivePanel === 'notification' ? 'translate-x-0' : 'translate-x-full'} `}
      >
        <div className='flex items-center justify-between mb-8 text-sm '>
          <span className='text-[var(--dark)] text-lg font-medium'>
            Notification
          </span>
          <i
            className='fa-solid fa-xmark cursor-pointer text-[var(--text-muted)]/60'
            onClick={() => SetActivePanel(null)}
          ></i>
        </div>
        <div className='flex flex-col gap-2'>
          {notificationLists.map((notification) => (
            <div
              className='hover:bg-[var(--light-gray)] cursor-pointer transition-all duration-300 rounded-xl p-2.5'
              onClick={() => {
                setSelectedNotification(notification);
                SetActivePanel(null);
              }}
              key={notification.id}
            >
              <h1 className='font-medium text-[1.05rem] font-bold'>
                {notification.title}
              </h1>
              <p className='text-[var(--text-muted)] text-[0.95rem] line-clamp-3'>
                {notification.content}
              </p>
              <p className='text-[var(--gray)]/70 text-[0.8rem] mt-2'>
                {notification.time}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NotificationSidebar;
