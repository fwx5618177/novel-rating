import BookList from '@components/BookList';
import FeatureNav from '@components/FeatureNav';
import Footer from '@components/Footer';
import Header from '@components/Header';
import MobileFooter from '@components/MobileFooter';
import Notification from '@components/Notification';
import RecallBookList from '@components/RecallBookList';
import { useSeo } from '@seo/useSeo';
import React, { useState } from 'react';

import styles from './home.module.scss';

const HomePage: React.FC = () => {
  const seo = useSeo('home');
  const [showNotification, setShowNotification] = useState(true);

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <div className={styles.app}>
      {seo}
      <Header />
      {showNotification && (
        <Notification
          type="info"
          message="This is a success message!"
          onClose={handleClose}
        />
      )}
      <FeatureNav />
      <BookList />
      <RecallBookList />
      <MobileFooter />
      <Footer />
    </div>
  );
};

export default HomePage;
