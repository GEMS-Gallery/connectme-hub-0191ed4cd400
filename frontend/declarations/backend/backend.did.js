export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getBio' : IDL.Func([], [IDL.Text], ['query']),
    'getContactInfo' : IDL.Func([], [IDL.Text, IDL.Text, IDL.Text], ['query']),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getProfilePicture' : IDL.Func([], [IDL.Text], ['query']),
    'getProjects' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text, IDL.Text))],
        ['query'],
      ),
    'getSkills' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getSocialLinks' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        ['query'],
      ),
    'getTestimonials' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text, IDL.Text))],
        ['query'],
      ),
    'getTimeAllocation' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Int))],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
