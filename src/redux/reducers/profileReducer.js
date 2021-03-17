import {
  EMPLOYE_PROFILE,
  EMPLOYE_PROFILE_FAILED,
  EMPLOYE_PROFILE_SUCCESS,
} from '../../utils/actionType';

const initState = {
  isLoading: true,
  message: '',
  data: {
    employeHeader: {
      employename: '',
      photoProfile: '',
      employeAddress: '',
      employeAbout: '',
    },
    employeExperience: null,
    employeEducation: null,
    employeContact: {
      employeWebsite: '',
      employePhone: '',
      employeGithub: '',
    },
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case EMPLOYE_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case EMPLOYE_PROFILE_SUCCESS:
      const {
        employe_datas,
        employe_addresses,
        employe_experiences,
        employe_educations,
        employe_socials,
      } = action.payload;
      return {
        ...state,
        isLoading: false,
        message: 'Success fetch data',
        data: {
          employeExperience: employe_experiences,
          employeEducation: employe_educations,
          ...state.data.employeHeader,
          employename: employe_datas.first_name,
          photoProfile: action.payload.photo_profile,
          employeAddress:
            employe_addresses.address_1 + ',' + employe_addresses.district_name,
          employeAbout: employe_datas.about,
          ...state.data.employeContact,
          employeWebsite: employe_socials.blog_link,
          employePhone: employe_datas.phone,
          employeGithub: employe_socials.github_link,
        },
      };
    case EMPLOYE_PROFILE_FAILED:
      return {
        ...state,
        message: action.message,
        isLoading: false,
      };
    default:
      return state;
  }
};
