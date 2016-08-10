/**
 * Storage for all the strings in project; change once, use everywhere ;)
 */

module.exports = {
  loadingMessage: '🦄 Loading...',
  deprecatedMessage: 'This message is deprecated, please scroll down to see the new message ;)',
  mainMenuMessage: 'Welcome to @arbeit_bot! I am a completelly free of charge Telegram based freelance market. Please select if you are looking for contractors or add your profile if you are looking for job.',
  noJobsExistMessage: 'No jobs exist. You can create one by clicking "Post new job" button.',
  clientMenuMessage: 'What would you like to do?',
  selectCategoryMessage: 'Please select category that your job falls into. Number of contractors available can be found between [square brackets].',
  selectJobHourlyRateMessage: 'Please select how much money would you like to pay. Price is given in USD per hour to identify level of developers. Yet you can negotiate fixed price in private messages with contractor later on. Number of available contractors in selected category for rate is given in [square brackets].',
  addJobDescriptionMessage: 'Please give us job description (limited to 500 characters). It will be visible to contractors. Please be brief, details can be discussed later with contractors in private dialogues.',
  filledEverythingMessage: 'You did it! Your profile is now complete. Now just sit back and wait for clients of your categories to offer you work (obviously if they like your bio).',
  fullFreelancerMessageAvailable: 'You are all set! Sit back and relax – clients from relevant categories will contact you if they like your bio and hourly rate.',
  fullFreelancerMessageBusy: 'You are all set! However, clients will not bother you as you are in busy status.',
  emptyFreelancerMessage: 'Welcome to the freelancer profile! Please fill in your bio, hourly rate and categories, so that clients can evaluate you and offer you job.',
  missingFreelancerMessage: 'Welcome to the freelancer profile! Please remember that clients will not be able to find you if you don\'t have bio, categories or hourly rate.',
  languageMessage: 'What language do you speak?\n\nНа каком языке вы говорите?',
  helpMessage: 'In case you have any requests, suggestions, concerns or just want to chat, contact by creator by clicking the button bellow.',
  becameBusyMessage: 'You just set your status to busy. You will not receive any new job offers until you switch back to available.',
  becameAvailableMessage: 'You just switched to available status. You will now receive relevant job offers until you switch back to busy.',
  missingBecameBusyMessage: 'You just changed your status to busy. But this doesn\'t mean much as clients will not be able to find you without properly filled bio, categories and hourly rate.',
  missingBecameAvailableMessage: 'You just changed to available status.  But this doesn\'t mean much as clients will not be able to find you without properly filled bio, categories and hourly rate.',
  pickFreelancersMessage: 'Success! Job has been created. Please select what freelancers should receive job offer from you.',
  editBioMessage: 'Please enter your bio (up to 150 characters)',
  selectCandidateMessage: 'Please select a candidate that you liked the most.',
  changedBioMessage: 'Congrats! Your new bio is:\n\n',
  yourCurrentBio: 'Your current bio:',
  editHourlyRateMessage: 'What is your hourly rate?',
  pickCategoriesMessage: 'Please pick categories',
  suggestCategoryMessage: 'Want to suggest a category?',
  waitContractorResponseMessage: 'You sent the offer to one of the freelancers. Please wait until freelancer accepts or rejects your offer, or simply select another freeelancer if you do not want to wait anymore.',
  acceptOrRejectMessage: 'Please accept or reject this job offer. After you accept this job offer you will only be able to finish the job.',
  waitClientResponseMessage: 'waitClientResponseMessage',
  contactWithFreelancerMessage: 'Wonderful! You got a contractor who accepted your offer. Please contact your new contractor directly and please rate your contractor experience after you finish this contract.',
  contactWithClientMessage: 'Great! You have accepted this offer. Now please communicate with the client directly and rate your experience as soon as you finish the job.',
  rateFreelancerMessage: 'The only thing left is to rate your contractor, how good was your contractor?',
  rateClientMessage: 'The only thing left is to rate your client. How good was your client?',
  reviewFreelancerMessage: 'reviewFreelancerMessage',
  reviewClientMessage: 'reviewClientMessage',
  thanksReviewMessage: 'thanksReviewMessage',
  clientHasChosenAnotherFreelancer: 'Client has chosen another freelancer.',
  noCandidatesMessage: 'There are no available candidates right now :( Please check back later or create a new job.',
  mainMenuOptions: {
    findJobs: '👤 Profile',
    findContractors: '⛑ Find contractors',
    help: '❔ Help'
  },
  clientMenuOptions: {
    postNewJob: '🔨 Post new job',
    myJobs: '🛠 My jobs',
    back: '🔙 Back'
  },
  freelanceMenuOptions: {
    editBio: '🖊 Edit bio',
    addBio: '🖊 Add bio',
    editCategories: '📌 Edit categories',
    addCategories: '📌 Add categories',
    editHourlyRate: '💲 Edit hourly rate',
    addHourlyRate: '💲 Add hourly rate',
    back: '🔙 Back',
    busy: '⚒ Busy',
    available: '✅ Available',
  },
  hourlyRateOptions: [
    '$0 – $5', '$5 – $10', '$10 – $20',
    '$20 – $30', '$30 – $40', '$40 – $50',
    '$50 – $75', '$75 – $100', '$100 – $200',
    '$200+'
  ],
  selectedCategory: '  ✅',
  selectedHourlyRate: '✅ ',
  categoryLeft: '<',
  categoryRight: '>',
  inlineSeparator: '~',
  categoryInline: 'cI',
  hourlyRateInline: 'hRI',
  freelancerInline: 'fI',
  freelancerJobInline: 'fJI',
  selectFreelancerInline: 'sFI',
  selectAnotherFreelancerInline: 'sAFI',
  freelancerAcceptInline: 'fAI',
  askRateClientInline: 'aRCI',
  askRateFreelancerInline: 'aRFI',
  rateClientInline: 'rCI',
  rateFreelancerInline: 'rFI',
  completeJobInline: 'cJI',
  reportJobInline: 'rpJI',
  reportFreelancerInline: 'rpFI',
  reportClientInline: 'rpCI',
  inputBioState: 'inputBioState',
  inputCategoryNameState: 'inputCategoryNameState',
  inputHourlyRateState: 'inputHourlyRateState',
  inputJobDescriptionState: 'inputJobDescriptionState',
  inputReportMessage: 'inputReportMessage',
  jobCreateCancel: '❌ Cancel',
  selectFreelancerCancel: '❌ Cancel',
  jobSendAllFreelancers: 'Send to all',
  jobSelectFreelancer: 'Select contractor',
  jobSelectAnotherFreelancer: 'Select another contractor',
  interestedOption: '✅',
  notInterestedOption: '❌',
  acceptOption: '✅',
  refuseOption: '❌',
  pendingOption: '🕒',
  saveReviewOption: 'saveReview',
  jobStates: {
    searchingForFreelancer: 'searchingForFreelancer',
    freelancerChosen: 'freelancerChosen',
    finished: 'finished',
    frozen: 'frozen',
    banned: 'banned'
  },
  reviewTypes: {
    byClient: 'byCl',
    byFreelancer: 'byFl'
  },
  freelancerOptions: {
    interested: '✅ Interested',
    notInterested: '❌ Not interested',
    report: '❗️ Report'
  },
  freelancerAcceptOptions: {
    accept: '✅ Accept',
    refuse: '❌ Refuse'
  },
  jobFinishedOptions: {
    rate: '⭐ Rate',
    report: '❗️ Report'
  },
  report: {
    thanks: 'Спасибо за вашу бдительность!',
    reason: 'В чем причина репорта?'
  },
  rateOptions: {
    back: '🔙 Back',
    oneStar: '⭐',
    twoStars: '⭐⭐',
    threeStars: '⭐⭐⭐',
    fourStars: '⭐⭐⭐⭐',
    fiveStars: '⭐⭐⭐⭐⭐'
  }
};