import Head from 'next/head';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

import Layout from '@/components/Layout';


export default function Custom404() {
  return (
        <div className="">
            <h2>
                <FaExclamationTriangle /> 404
            </h2>
            <h3 className="">Sorry, there is nothing here</h3>

        {/**            <BackButton />   */}
        </div>
  );
}