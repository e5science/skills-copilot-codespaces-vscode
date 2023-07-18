function skillsMember(){
    return {
        restrict: 'E',
        templateURL: 'modules/skills/views/member.html',
        controller: 'skillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm',
        }
    };
}