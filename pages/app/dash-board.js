import { StylesContext } from '@material-ui/styles';
import Dashboard from '../../components/dashBoard';
import Layout from '../../components/layout';
import { Navbar } from '../../components/navbar';
import styles from './dashboard.module.css';

export default function DashBoard(props) {


  return (
    <Layout>
        <Navbar />
       
          <Dashboard />
        
    </Layout>
  );
}
