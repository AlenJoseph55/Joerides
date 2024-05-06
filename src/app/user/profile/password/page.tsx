import Nav from "@/components/Nav"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Profilecard from "@/components/ProfileCard"





export default function password() {
    return (
        <div>
            <div className="sm:h-[10vh]">
                <Nav />
            </div>
            <div className="grid sm:grid-cols-4 gap-1">
                <div>
<Profilecard />
                </div>
                <div className="sm:col-span-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>My Profile</CardTitle>
                        </CardHeader>
                        <div className="container mx-auto">
                            <div className="p-4 bg-white rounded shadow-md">
                                <h2 className="text-xl font-bold mb-4">Change Password</h2>
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="oldpassword" className="block text-sm font-medium mb-1">Old Password</label>
                                        <input type="password" id="oldpassword" name="oldpassword" required className="form-control block w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-sm font-medium mb-1">Choose a Password</label>
                                        <input type="password" id="password" name="password" required className="form-control block w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                        <p className="text-xs text-gray-500 mt-1">Your password must be strong and unique.</p>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="rePassword" className="block text-sm font-medium mb-1">Re-enter Password</label>
                                        <input type="password" id="rePassword" name="rePassword" required className="form-control block w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <button type="submit" className="btn bg-yellow-500 h-8 p-1 rounded-[8px]">Change Password</button>
                                </form>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    )
}