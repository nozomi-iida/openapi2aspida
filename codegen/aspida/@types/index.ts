/* eslint-disable */
/** STIを使って実装する */
export type External16 = {
  id: string
  firstName: string
  lastName: string
  firstNameKana: string
  lastNameKana: string
  gender: 'MALE' | 'FEMALE' | 'OTHER'
  phone: string
  postalCode?: string | undefined
  address?: string | undefined
  dateOfBirth: string
  biography?: string | undefined
}

/** dateの日付は月初で統一 */
export type External17 = {
  id: string
  /** 「在職中」「離職中」 */
  isEmployed: boolean
  occupation: External21
  industry: External22
  position: string
  annualIncome: number
  managementExperience: number
  jobSummary?: string | undefined
  sinceDate: string
  untilDate?: string | undefined
  name: string
}

/** dateの日付は月初で統一 */
export type External18 = {
  id: string
  name: string
  faculty?: string | undefined
  sinceDate: string
  untilDate: string
  /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
  type: 'graduate_school' | 'university' | 'vocational_school' | 'junior_college' | 'high_school'
}

/** 職種 */
export type External21 = {
  id: string
  name: string
}

/** 業種 */
export type External22 = {
  id: string
  name: string
}

export type External23 = {
  id: string
  name: string
}

export type External24 = {
  id: string
  name: string
  nameKana: string
  headOfficeLocation: string
  yearOfEstablishment: string
  hpUrl?: string | undefined
  phone?: string | undefined
  capital: number
  isListed: boolean
  representative: string
  representativeKana: string
  netSales?: string | undefined
  numbersOfEmployees?: string | undefined
  averageAge?: number | undefined
  businessSummary: string
  corporatePr?: string | undefined
  industries?: External22[] | undefined
  coverImageUrl?: string | undefined
}

export type External19 = {
  id: string
  email: string
  emailVerificationStatus: 'unspecified' | 'request' | 'verified'
  profile: External16
  workHistories?: External17[] | undefined
  academicHistories: External18[]
  emailVerificationToken?: string | undefined
  lastNotificationReadAt?: string | undefined
}

export type External20 = {
  id: string
  title: string
  occupation?: External21 | undefined
  industry?: External22 | undefined
  workplace?: External23 | undefined
  jobDescription?: string | undefined
  workConditions?: string | undefined
  qualificationRequirement?: string | undefined
  company: External24
  status: 'active' | 'inactive' | 'draft'
}

export type External25 = {
  id: string
  account: External19
  company: External24
}

/** 職種「中項目」 */
export type External26 = {
  id: string
  name: string
  occupations?: External21[] | undefined
}

export type External27 = {
  id: string
  name: string
}

export type External0 = {
  id: string
  email: string
  emailVerificationStatus: 'unspecified' | 'request' | 'verified'
  profile: External16
  workHistories?: External17[] | undefined
  academicHistories: External18[]
  emailVerificationToken?: string | undefined
  lastNotificationReadAt?: string | undefined
}

export type External1 = {
  id: string
  title: string
  occupation?: External21 | undefined
  industry?: External22 | undefined
  workplace?: External23 | undefined
  jobDescription?: string | undefined
  workConditions?: string | undefined
  qualificationRequirement?: string | undefined
  company: External24
  status: 'active' | 'inactive' | 'draft'
}

export type External2 = {
  id: string
  name: string
  account: External19
  recruitments?: External20[] | undefined
}

export type External3 = {
  id: string
  name: string
  nameKana: string
  headOfficeLocation: string
  yearOfEstablishment: string
  hpUrl?: string | undefined
  phone?: string | undefined
  capital: number
  isListed: boolean
  representative: string
  representativeKana: string
  netSales?: string | undefined
  numbersOfEmployees?: string | undefined
  averageAge?: number | undefined
  businessSummary: string
  corporatePr?: string | undefined
  industries?: External22[] | undefined
  coverImageUrl?: string | undefined
}

/** STIを使って実装する */
export type External4 = {
  id: string
  content: string
  createdAt: string
  /** 「未読」「既読」 */
  isRead: boolean
}

export type External5 = {
  id: string
  account: External19
  company: External24
}

export type External6 = {
  id: string
  content: string
  account: External19
  room: External25
}

export type External7 = {
  id: string
  recruitment: External20
  account: External19
  /** 採用側の場合のみ存在、未対応, 対応中, 対応済み, 採用・契約締結済み */
  managementStatus: 'backlog' | 'in_progress' | 'closed' | 'signed'
  createdAt?: string | undefined
  updatedAt?: string | undefined
}

/** dateの日付は月初で統一 */
export type External8 = {
  id: string
  /** 「在職中」「離職中」 */
  isEmployed: boolean
  occupation: External21
  industry: External22
  position: string
  annualIncome: number
  managementExperience: number
  jobSummary?: string | undefined
  sinceDate: string
  untilDate?: string | undefined
  name: string
}

/** dateの日付は月初で統一 */
export type External9 = {
  id: string
  name: string
  faculty?: string | undefined
  sinceDate: string
  untilDate: string
  /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
  type: 'graduate_school' | 'university' | 'vocational_school' | 'junior_college' | 'high_school'
}

/** STIを使って実装する */
export type External10 = {
  id: string
  firstName: string
  lastName: string
  firstNameKana: string
  lastNameKana: string
  gender: 'MALE' | 'FEMALE' | 'OTHER'
  phone: string
  postalCode?: string | undefined
  address?: string | undefined
  dateOfBirth: string
  biography?: string | undefined
}

/** 職種「大項目」 */
export type External11 = {
  id: string
  name: string
  occupationSubCategories?: External26[] | undefined
}

/** 業種カテゴリー */
export type External12 = {
  id: string
  name: string
  industries?: External22[] | undefined
}

export type External13 = {
  id: string
  name: string
}

export type External14 = {
  id: string
  /** 転職希望時期(Nヶ月以内) */
  timeToChangeJobs?: number | undefined
  annualIncome?: number | undefined
  workplace?: External23 | undefined
  occupations?: External21[] | undefined
  employmentStatuses?: External27[] | undefined
  account: External19
}

export type External15 = {
  id: string
  name: string
}
