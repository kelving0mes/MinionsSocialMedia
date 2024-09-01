import { SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";
import User from "../components/User";
import Post from "../components/Post";
import RowButtons from "../components/RowButtons";

const headerProps = {
  source: 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const userProps = {
  source: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  username: 'Kelvin Gomes',
  userSlug: '@kelving0mes'
}

export default function NewPost() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header source={headerProps.source} />
        <User userId="1234" username='Kelvin Gomes' source={userProps.source} userSlug={userProps.userSlug} />
        <Post />
        <RowButtons />
      </ScrollView>
    </SafeAreaView>
  )
}
