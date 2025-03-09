import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, CreditCard, Users, BarChart3, CalendarDays, Briefcase, HomeIcon } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-5 md:p-10">
      <div className="flex gap-2 items-center justify-between flex-col md:flex-row">
       <div className="flex flex-col gap-2 items-center md:items-start">
       <h1 className="text-3xl font-bold tracking-tight">Welcome to HR Manager</h1>
        <p className="text-muted-foreground text-center">
          A comprehensive HR and payroll management solution for your organization
        </p>
       </div>
        <Link href={"/admin"} className={buttonVariants()}> <HomeIcon/> Go to Dashboard</Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Payroll Management</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Payroll & Compensation</div>
            <p className="text-xs text-muted-foreground">
              Manage employee salaries, benefits, and payments
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="/admin/payroll">Go to Payroll</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time & Attendance</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Attendance Tracking</div>
            <p className="text-xs text-muted-foreground">
              Track employee time, attendance, and overtime
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="/admin/attendance">Go to Attendance</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recruitment</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Hiring & Onboarding</div>
            <p className="text-xs text-muted-foreground">
              Manage job postings, applications, and employee onboarding
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="/admin/recruitment/applications">Go to Recruitment</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Employee Management</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Employee Records</div>
            <p className="text-xs text-muted-foreground">
              Manage employee information, documents, and performance
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="/admin/employees">Go to Employees</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leave Management</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Time Off Requests</div>
            <p className="text-xs text-muted-foreground">
              Manage employee leave requests, balances, and approvals
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="/admin/leave">Go to Leave Management</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports & Analytics</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">HR Insights</div>
            <p className="text-xs text-muted-foreground">
              Generate reports and analyze HR metrics
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="/admin/reports">Go to Reports</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
